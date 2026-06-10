"use client";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCheckCircle, FiCompass, FiEye } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MISI, OFFICERS, VILLAGE } from "@/data/site";

export const ProfilView = () => {
  return (
    <Layout
      title="Profil Desa"
      description="Sejarah, visi misi, dan struktur pemerintahan Desa Curah Dringu."
    >
      <PageHero
        current="Profil"
        title="Mengenal Desa Curah Dringu"
        subtitle="Desa pesisir yang tumbuh dari kearifan nelayan dan semangat gotong royong warga."
      />

      {/* Sejarah */}
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 14 }} align="center">
            <Reveal flex="1">
              <Image
                src="/content.jpeg"
                alt="Desa Curah Dringu"
                rounded="3xl"
                objectFit="cover"
                w="full"
                h={{ base: "260px", md: "420px" }}
                boxShadow="0 24px 60px rgba(10,68,61,0.18)"
              />
            </Reveal>
            <Stack flex="1" spacing={5}>
              <SectionHeading
                eyebrow="Sejarah Singkat"
                title="Tumbuh di Tepi Selat Madura"
                align="start"
              />
              <Text color="ink.600" lineHeight={1.9}>
                {VILLAGE.shortName} adalah sebuah desa di {VILLAGE.district},{" "}
                {VILLAGE.regency}, Provinsi {VILLAGE.province}. Terletak di pesisir
                pantai Selat Madura, kehidupan warga banyak diwarnai oleh aktivitas
                nelayan, perdagangan hasil laut, serta pertanian di lahan-lahan
                produktif.
              </Text>
              <Text color="ink.600" lineHeight={1.9}>
                Seiring waktu, desa terus berbenah menjadi desa yang modern namun
                tetap menjunjung tinggi nilai kekeluargaan, gotong royong, dan
                pelayanan publik yang terbuka bagi seluruh warganya.
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Visi Misi */}
      <Box bg="ink.50" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            <Reveal>
              <Stack
                bg="brand.600"
                color="white"
                rounded="3xl"
                p={{ base: 7, md: 10 }}
                spacing={4}
                h="full"
              >
                <Flex w={12} h={12} rounded="xl" bg="whiteAlpha.200" align="center" justify="center">
                  <Icon as={FiEye} boxSize={6} />
                </Flex>
                <Heading size="lg">Visi</Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.6}>
                  “Terwujudnya Desa Curah Dringu yang maju, mandiri, dan sejahtera
                  berbasis potensi pesisir dengan pelayanan yang ramah dan
                  transparan.”
                </Text>
              </Stack>
            </Reveal>
            <Reveal delay={0.1}>
              <Stack
                bg="white"
                rounded="3xl"
                p={{ base: 7, md: 10 }}
                spacing={4}
                h="full"
                border="1px solid"
                borderColor="ink.100"
              >
                <Flex w={12} h={12} rounded="xl" bg="brand.50" color="brand.600" align="center" justify="center">
                  <Icon as={FiCompass} boxSize={6} />
                </Flex>
                <Heading size="lg">Misi</Heading>
                <List spacing={3}>
                  {MISI.map((m) => (
                    <ListItem key={m} display="flex" color="ink.700">
                      <ListIcon as={FiCheckCircle} color="brand.500" mt={1} />
                      <Text>{m}</Text>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Reveal>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Struktur perangkat */}
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SectionHeading
            eyebrow="Pemerintahan"
            title="Perangkat Desa"
            subtitle="Tim yang siap melayani dan bekerja untuk kemajuan warga Curah Dringu."
          />
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
            {OFFICERS.map((o, i) => (
              <Reveal key={o.name} delay={(i % 3) * 0.08} h="full">
                <Stack
                  align="center"
                  spacing={3}
                  bg="ink.50"
                  rounded="2xl"
                  p={{ base: 5, md: 7 }}
                  textAlign="center"
                  h="full"
                  transition="all 0.25s"
                  _hover={{ boxShadow: "0 14px 36px rgba(10,68,61,0.10)", transform: "translateY(-4px)" }}
                >
                  <Avatar name={o.name} size={{ base: "lg", md: "xl" }} bg="brand.500" color="white" />
                  <Box>
                    <Heading size="sm">{o.name}</Heading>
                    <Text color="brand.600" fontWeight={600} fontSize="sm">
                      {o.role}
                    </Text>
                  </Box>
                </Stack>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};
