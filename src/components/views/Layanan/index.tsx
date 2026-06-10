"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/site";

const STEPS = [
  { no: "01", title: "Siapkan Berkas", desc: "Lengkapi persyaratan sesuai jenis layanan." },
  { no: "02", title: "Datang ke Kantor", desc: "Kunjungi kantor desa pada jam pelayanan." },
  { no: "03", title: "Verifikasi", desc: "Petugas memeriksa kelengkapan berkasmu." },
  { no: "04", title: "Selesai", desc: "Surat diproses & ditandatangani Kepala Desa." },
];

export const LayananView = () => {
  return (
    <Layout
      title="Layanan"
      description="Daftar lengkap layanan administrasi Desa Curah Dringu beserta persyaratannya."
    >
      <PageHero
        current="Layanan"
        title="Layanan Administrasi Warga"
        subtitle="Semua layanan surat-menyurat desa dengan persyaratan yang jelas dan transparan."
      />

      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.1} h="full">
                <Flex
                  bg="white"
                  border="1px solid"
                  borderColor="ink.100"
                  rounded="2xl"
                  p={{ base: 6, md: 7 }}
                  gap={5}
                  h="full"
                  direction={{ base: "column", sm: "row" }}
                  transition="all 0.25s"
                  _hover={{
                    borderColor: "brand.300",
                    boxShadow: "0 16px 40px rgba(10,68,61,0.08)",
                  }}
                >
                  <Flex
                    w={14}
                    h={14}
                    rounded="xl"
                    bg="brand.50"
                    color="brand.600"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={s.icon} boxSize={7} />
                  </Flex>
                  <Box>
                    <Heading size="md" mb={1}>
                      {s.title}
                    </Heading>
                    <Text color="ink.500" fontSize="sm" mb={4}>
                      {s.desc}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight={700}
                      textTransform="uppercase"
                      color="ink.400"
                      letterSpacing="wide"
                      mb={2}
                    >
                      Persyaratan
                    </Text>
                    <List spacing={1.5}>
                      {s.requirements.map((r) => (
                        <ListItem
                          key={r}
                          fontSize="sm"
                          color="ink.700"
                          display="flex"
                          alignItems="center"
                        >
                          <ListIcon as={FiCheckCircle} color="brand.500" />
                          {r}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Flex>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="ink.50" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SectionHeading
            eyebrow="Alur Pelayanan"
            title="Cara Mengurus Surat"
            subtitle="Hanya empat langkah mudah untuk mendapatkan layanan administrasi."
          />
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
            {STEPS.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.1} h="full">
                <Stack
                  spacing={3}
                  bg="white"
                  rounded="2xl"
                  p={6}
                  h="full"
                  border="1px solid"
                  borderColor="ink.100"
                >
                  <Text fontSize="3xl" fontWeight={800} color="brand.200">
                    {step.no}
                  </Text>
                  <Heading size="sm">{step.title}</Heading>
                  <Text color="ink.500" fontSize="sm">
                    {step.desc}
                  </Text>
                </Stack>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};
