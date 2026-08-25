import type { GetStaticProps } from "next";
import { BeritaView } from "@/components/views/Berita";
import type { NewsItem } from "@/data/site";
import { getFallbackNews } from "@/lib/news";
import { getVillageNews } from "@/lib/news";

interface BeritaProps {
  news: NewsItem[];
}

const Berita = ({ news }: BeritaProps) => {
  return <BeritaView news={news} />;
};

export default Berita;

export const getStaticProps: GetStaticProps<BeritaProps> = async () => {
  try {
    const news = await getVillageNews();

    return {
      props: { news: news.length ? news : getFallbackNews() },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Unable to load village news", error);

    return {
      props: { news: getFallbackNews() },
      revalidate: 3600,
    };
  }
};
