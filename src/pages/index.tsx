import type { GetStaticProps } from "next";
import { HomeView } from "@/components/views/Home";
import type { NewsItem } from "@/data/site";
import { getFallbackNews } from "@/lib/news";
import { getVillageNews } from "@/lib/news";

interface HomeProps {
  news: NewsItem[];
}

export default function Home({ news }: HomeProps) {
  return <HomeView news={news} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const news = await getVillageNews();

    return {
      props: { news: (news.length ? news : getFallbackNews()).slice(0, 3) },
      ...(process.env.CF_PAGES === "1" ? {} : { revalidate: 3600 }),
    };
  } catch (error) {
    console.error("Unable to load village news", error);

    return {
      props: { news: getFallbackNews().slice(0, 3) },
      ...(process.env.CF_PAGES === "1" ? {} : { revalidate: 3600 }),
    };
  }
};
