"use client";
import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { NEWS } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { Reveal } from "@/components/ui/Reveal";

export const NewsSection = () => {
  return (
    <Box bg="ink.50" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "end" }}
          gap={4}
          mb={{ base: 8, md: 10 }}
        >
          <Box>
            <SectionHeading
              eyebrow="Kabar Desa"
              title="Berita & Pengumuman Terbaru"
              align="start"
            />
          </Box>
          <Button
            as={NextLink}
            href="/berita"
            variant="ghost"
            colorScheme="brand"
            rightIcon={<FiArrowRight />}
            display={{ base: "none", md: "inline-flex" }}
          >
            Semua Berita
          </Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {NEWS.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1} h="full">
              <NewsCard item={item} />
            </Reveal>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={10} display={{ base: "flex", md: "none" }}>
          <Button
            as={NextLink}
            href="/berita"
            colorScheme="brand"
            variant="outline"
            rightIcon={<FiArrowRight />}
          >
            Semua Berita
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
