"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { POTENSI } from "@/data/site";

export const PotensiView = () => {
  return (
    <Layout
      title="Potensi Desa"
      description="Wisata pesisir, UMKM, dan potensi agro Desa Curah Dringu."
    >
      <PageHero
        current="Potensi"
        title="Potensi & Unggulan Desa"
        subtitle="Dari laut, ladang, hingga karya warga — inilah kekuatan ekonomi dan wisata Curah Dringu."
      />
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <Stack spacing={{ base: 10, md: 16 }}>
            {POTENSI.map((p, i) => (
              <Reveal key={p.title}>
                <Flex
                  direction={{
                    base: "column",
                    md: i % 2 === 0 ? "row" : "row-reverse",
                  }}
                  gap={{ base: 6, md: 12 }}
                  align="center"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    rounded="3xl"
                    objectFit="cover"
                    w={{ base: "full", md: "50%" }}
                    h={{ base: "240px", md: "360px" }}
                    fallbackSrc="/content.jpeg"
                    boxShadow="0 24px 60px rgba(10,68,61,0.16)"
                  />
                  <Stack flex="1" spacing={4}>
                    <Tag w="fit-content" colorScheme="sand" rounded="full" fontWeight={700}>
                      {p.tag}
                    </Tag>
                    <Heading size={{ base: "lg", md: "xl" }}>{p.title}</Heading>
                    <Text color="ink.600" fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                      {p.desc} Potensi ini dikelola bersama warga dan BUMDes untuk
                      mendorong perekonomian desa serta membuka lapangan kerja baru
                      bagi masyarakat sekitar.
                    </Text>
                  </Stack>
                </Flex>
              </Reveal>
            ))}
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};
