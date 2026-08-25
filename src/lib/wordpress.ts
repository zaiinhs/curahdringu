import type { NewsItem } from "@/data/site";

const PAGE_SIZE = 100;
const MAX_PAGES = 2;

const DEFAULT_KEYWORDS = ["Curahdringu", "Curah Dringu"];

/**
 * Hanya simpan artikel yang benar-benar terkait desa: menyebut nama desa
 * (kedua ejaan) atau Pantai Bahak sebagai destinasi utamanya.
 */
const isVillageNews = (text: string) =>
  /curah\s?dringu|pantai\s+(tambak\s+)?bahak/i.test(text);

const decodeEntities = (value: string) =>
  value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&hellip;/g, "…")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

const toPlainText = (value: string) =>
  decodeEntities(value)
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*(\[…\]|\[\.\.\.\])\s*$/, "")
    .trim();

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

export interface WpSourceConfig {
  /** Endpoint REST WordPress, mis. https://domain.co.id/wp-json/wp/v2/posts */
  apiUrl: string;
  /** Nama media untuk atribusi di kartu berita. */
  sourceName: string;
  /** Kata kunci pencarian; default dua ejaan nama desa. */
  keywords?: string[];
}

interface WpPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string } | null>;
    "wp:term"?: Array<Array<{ name: string } | null> | null>;
  };
}

interface WpPage {
  posts: WpPost[];
  totalPages: number;
}

const fetchPage = async (
  apiUrl: string,
  term: string,
  page: number,
): Promise<WpPage> => {
  const query = new URLSearchParams({
    search: term,
    per_page: String(PAGE_SIZE),
    page: String(page),
    _embed: "1",
    _fields: "id,date,slug,link,title,excerpt,_links",
  });

  const response = await fetch(`${apiUrl}?${query}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`${new URL(apiUrl).host} API returned ${response.status}`);
  }

  const posts = (await response.json()) as WpPost[];
  const totalPages = Number(response.headers.get("X-WP-TotalPages")) || 1;

  return { posts, totalPages };
};

const fetchKeywordPosts = async (apiUrl: string, term: string) => {
  const first = await fetchPage(apiUrl, term, 1);
  const posts = [...first.posts];

  for (
    let page = 2;
    page <= Math.min(first.totalPages, MAX_PAGES);
    page += 1
  ) {
    posts.push(...(await fetchPage(apiUrl, term, page)).posts);
  }

  return posts;
};

/**
 * Membuat fungsi pengambil kabar dari sebuah situs WordPress.
 * Beberapa kata kunci digabung dan hasilnya dideduplikasi berdasarkan ID.
 */
export const createWpNewsSource =
  ({ apiUrl, sourceName, keywords }: WpSourceConfig) =>
  async (): Promise<NewsItem[]> => {
    const batches = await Promise.all(
      (keywords ?? DEFAULT_KEYWORDS).map((term) =>
        fetchKeywordPosts(apiUrl, term),
      ),
    );

    const unique = new Map<number, WpPost>();

    batches.flat().forEach((post) => unique.set(post.id, post));

    return Array.from(unique.values())
      .filter((post) =>
        isVillageNews(
          `${post.title.rendered} ${post.excerpt.rendered} ${post.slug}`,
        ),
      )
      .sort((first, second) => second.date.localeCompare(first.date))
      .map((post) => {
        const iso = `${post.date}+07:00`;
        const category =
          post._embedded?.["wp:term"]?.[0]?.find(Boolean)?.name || "Berita";
        const image =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/content.jpeg";

        return {
          slug: post.slug,
          title: toPlainText(post.title.rendered),
          category,
          date: dateFormatter.format(new Date(iso)),
          iso,
          excerpt: toPlainText(post.excerpt.rendered),
          image,
          source: sourceName,
          url: post.link,
        };
      });
  };
