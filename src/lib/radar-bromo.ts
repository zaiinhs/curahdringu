import type { NewsItem } from "@/data/site";

const API_URL = "https://api-jpr.jawapos.com/api-jp-graphql/";
const SITE_URL = "https://radarbromo.jawapos.com";
const PUBLISHER_ID = "21";
const PAGE_SIZE = 100;
const MAX_PAGES = 20;

const SEARCH_QUERY = `
  query CurahdringuNews($publisherId: ID!, $keyword: String!, $first: Int!, $page: Int!) {
    searchArticle(
      filter: { publisherId: $publisherId, keyword: $keyword }
      first: $first
      page: $page
    ) {
      paginatorInfo {
        hasMorePages
      }
      data {
        id
        article_id
        title
        slug
        description
        cover
        timestamp
        category {
          name
          slug
        }
      }
    }
  }
`;

interface RadarArticle {
  id: string;
  article_id: string;
  title: string;
  slug: string;
  description: string;
  cover: string | null;
  timestamp: string;
  category: {
    name: string;
    slug: string;
  };
}

interface RadarResponse {
  data?: {
    searchArticle: {
      paginatorInfo: {
        hasMorePages: boolean;
      };
      data: RadarArticle[];
    };
  };
  errors?: Array<{ message: string }>;
}

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

const fetchPage = async (page: number) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: SEARCH_QUERY,
      variables: {
        publisherId: PUBLISHER_ID,
        keyword: "Curahdringu",
        first: PAGE_SIZE,
        page,
      },
    }),
  });

  const payload = (await response.json()) as RadarResponse;

  if (!response.ok || !payload.data || payload.errors?.length) {
    const message = payload.errors?.map((error) => error.message).join("; ");
    throw new Error(message || `Radar Bromo API returned ${response.status}`);
  }

  return payload.data.searchArticle;
};

export const getCurahdringuNews = async (): Promise<NewsItem[]> => {
  const articles = new Map<string, RadarArticle>();

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const result = await fetchPage(page);

    result.data.forEach((article) => articles.set(article.id, article));

    if (!result.paginatorInfo.hasMorePages) {
      break;
    }
  }

  return Array.from(articles.values())
    .sort(
      (first, second) =>
        Date.parse(second.timestamp) - Date.parse(first.timestamp),
    )
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      category: article.category.name,
      date: dateFormatter.format(new Date(article.timestamp)),
      iso: article.timestamp,
      excerpt: article.description,
      image: article.cover || "/content.jpeg",
      source: "Radar Bromo",
      url: `${SITE_URL}/${article.category.slug}/${article.article_id}/${article.slug}`,
    }));
};
