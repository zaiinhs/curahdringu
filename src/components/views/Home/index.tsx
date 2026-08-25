import { Layout } from "@/components/Layout";
import HeroComponent from "./Fragments/Hero";
import { StatsComponent } from "./Fragments/Stats";
import { ImprovementSummary } from "./Fragments/ImprovementSummary";
import { ServicesPreview } from "./Fragments/ServicesPreview";
import { NewsSection } from "./Fragments/NewsSection";
import { PotensiSection } from "./Fragments/PotensiSection";
import { AgendaSection } from "./Fragments/AgendaSection";
import { CtaSection } from "./Fragments/CtaSection";
import { MapsComponent } from "./Fragments/Maps";
import type { NewsItem } from "@/data/site";

export const HomeView = ({ news }: { news: NewsItem[] }) => {
  return (
    <Layout
      canonicalPath="/"
      description="Website resmi Desa Curah Dringu, Kecamatan Tongas, Kabupaten Probolinggo — layanan administrasi, potensi wisata Pantai Bahak Indah, BUMDes Lancar Jaya, berita, dan pengumuman desa."
    >
      <HeroComponent />
      <StatsComponent />
      <ImprovementSummary />
      <ServicesPreview />
      <NewsSection news={news} />
      <PotensiSection />
      <AgendaSection />
      <CtaSection />
      <MapsComponent />
    </Layout>
  );
};
