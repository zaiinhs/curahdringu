"use client";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { NewsCard } from "@/components/ui/NewsCard";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS } from "@/data/site";

export const BeritaView = () => {
  // Tampilkan koleksi berita (digandakan untuk contoh tata letak penuh).
  const items = [...NEWS, ...NEWS.map((n) => ({ ...n, slug: n.slug + "-2" }))];

  return (
    <Layout
      title="Berita & Pengumuman"
      description="Kabar terbaru, pengumuman, dan kegiatan Desa Curah Dringu."
    >
      <PageHero
        current="Berita"
        title="Berita & Pengumuman Desa"
        subtitle="Ikuti perkembangan terkini, agenda, dan informasi penting dari Desa Curah Dringu."
      />
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 0.08} h="full">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};
