import { Layout } from "@/components/Layout";
import HeroComponent from "./Fragments/Hero";
import { MapsComponent } from "./Fragments/Maps";

export const HomeView = () => {
  return (
    <Layout>
      <HeroComponent />
      <MapsComponent />
    </Layout>
  );
};
