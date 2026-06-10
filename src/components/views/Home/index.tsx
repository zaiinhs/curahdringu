import { Layout } from "@/components/Layout";
import HeroComponent from "./Fragments/Hero";
import { StatsComponent } from "./Fragments/Stats";
import { ServicesPreview } from "./Fragments/ServicesPreview";
import { NewsSection } from "./Fragments/NewsSection";
import { PotensiSection } from "./Fragments/PotensiSection";
import { AgendaSection } from "./Fragments/AgendaSection";
import { CtaSection } from "./Fragments/CtaSection";
import { MapsComponent } from "./Fragments/Maps";

export const HomeView = () => {
  return (
    <Layout>
      <HeroComponent />
      <StatsComponent />
      <ServicesPreview />
      <NewsSection />
      <PotensiSection />
      <AgendaSection />
      <CtaSection />
      <MapsComponent />
    </Layout>
  );
};
