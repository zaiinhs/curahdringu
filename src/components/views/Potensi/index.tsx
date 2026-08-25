"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FiCheckCircle, FiExternalLink, FiMapPin, FiNavigation } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { POTENSI } from "@/data/site";

export const PotensiView = () => {
  return (
    <Layout
      title="Potensi Desa"
      description="6 potensi unggulan Desa Curah Dringu: Pantai Bahak Indah, ekowisata mangrove, perikanan & petik laut, UMKM olahan hasil laut, pertanian, dan BUMDes Lancar Jaya."
      canonicalPath="/potensi"
    >
      <PageHero
        current="Potensi"
        title="Potensi & Unggulan Desa"
        subtitle="Dari pesisir Selat Madura hingga sawah subur — 6 kekuatan ekonomi, wisata, dan konservasi yang membuat Curah Dringu istimewa."
      />

      {/* Intro ringkas + quick stats */}
      <Box bg="white" pt={{ base: 10, md: 14 }} pb={{ base: 2, md: 4 }}>
        <Container maxW="7xl">
          <Reveal>
            <Stack
              spacing={4}
              maxW="3xl"
              mx="auto"
              textAlign="center"
              mb={{ base: 10, md: 14 }}
            >
              <Text color="ink.600" fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                Hasil riset terkini (SIDITA Disbudpar Jatim, Pemkab Probolinggo, Kemen LH,
                Radar Bromo, dan data BUMDes) — Curah Dringu bukan sekadar desa pesisir.
                Pantai Bahak yang viral adalah pintu masuk ke ekosistem{" "}
                <b>wisata–konservasi–UMKM–agro</b> yang saling menguatkan.
              </Text>
              <HStack justify="center" spacing={2} flexWrap="wrap">
                <Badge colorScheme="teal" rounded="full" px={3} py={1}>
                  📍 -7.7256, 113.1192
                </Badge>
                <Badge colorScheme="sand" rounded="full" px={3} py={1}>
                  6 Potensi Terverifikasi
                </Badge>
                <Badge colorScheme="orange" rounded="full" px={3} py={1}>
                  Viral: Pantai Bahak
                </Badge>
              </HStack>
            </Stack>
          </Reveal>
        </Container>
      </Box>

      <Box bg="white" py={{ base: 6, md: 10 }} pb={{ base: 14, md: 20 }}>
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
                  bg="white"
                  rounded="3xl"
                  p={{ base: 4, md: 6 }}
                  border="1px solid"
                  borderColor="blackAlpha.50"
                  boxShadow="0 8px 32px rgba(10,68,61,0.06)"
                >
                  <Box
                    position="relative"
                    w={{ base: "full", md: "50%" }}
                    h={{ base: "240px", md: "380px" }}
                    overflow="hidden"
                    rounded="2xl"
                    flexShrink={0}
                    boxShadow="0 24px 60px rgba(10,68,61,0.16)"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      objectFit="cover"
                      w="full"
                      h="full"
                      fallbackSrc="/content.jpeg"
                    />
                    {/* overlay tag di atas gambar (mobile friendly) */}
                    <Tag
                      position="absolute"
                      top={4}
                      left={4}
                      colorScheme="sand"
                      rounded="full"
                      fontWeight={700}
                      boxShadow="md"
                    >
                      {p.tag}
                    </Tag>
                  </Box>

                  <Stack flex="1" spacing={4} py={{ base: 2, md: 4 }}>
                    <Tag
                      w="fit-content"
                      colorScheme="sand"
                      rounded="full"
                      fontWeight={700}
                      display={{ base: "none", md: "flex" }}
                    >
                      {p.tag}
                    </Tag>

                    <Heading size={{ base: "lg", md: "xl" }} lineHeight={1.2}>
                      {p.title}
                    </Heading>

                    {p.location && (
                      <HStack color="teal.700" spacing={2} align="start">
                        <Box as={FiMapPin} mt={1} flexShrink={0} />
                        <Text fontSize="sm" fontWeight={600}>
                          {p.location}
                        </Text>
                      </HStack>
                    )}

                    {p.meta && (
                      <Text
                        fontSize="sm"
                        fontWeight={700}
                        color="ink.500"
                        bg="sand.50"
                        px={3}
                        py={2}
                        rounded="full"
                        w="fit-content"
                      >
                        {p.meta}
                      </Text>
                    )}

                    <Text color="ink.600" fontSize={{ base: "md", md: "md" }} lineHeight={1.8}>
                      {p.desc}
                    </Text>

                    {p.highlights && p.highlights.length > 0 && (
                      <List spacing={2} pt={1}>
                        {p.highlights.map((h) => (
                          <ListItem
                            key={h}
                            display="flex"
                            alignItems="start"
                            fontSize="sm"
                            color="ink.700"
                            lineHeight={1.6}
                          >
                            <ListIcon as={FiCheckCircle} color="teal.500" mt={1} />
                            {h}
                          </ListItem>
                        ))}
                      </List>
                    )}

                    <HStack spacing={3} pt={2} flexWrap="wrap">
                      {p.coords && (
                        <Button
                          as={Link}
                          href={`https://www.google.com/maps/search/?api=1&query=${p.coords.lat},${p.coords.lng}`}
                          isExternal
                          size="sm"
                          colorScheme="teal"
                          leftIcon={<FiNavigation />}
                          rounded="full"
                          _hover={{ textDecoration: "none" }}
                        >
                          Lihat di Maps
                        </Button>
                      )}
                      {p.sourceUrl && (
                        <Button
                          as={Link}
                          href={p.sourceUrl}
                          isExternal
                          size="sm"
                          variant="ghost"
                          colorScheme="teal"
                          leftIcon={<FiExternalLink />}
                          rounded="full"
                          _hover={{ textDecoration: "none", bg: "teal.50" }}
                        >
                          Sumber
                        </Button>
                      )}
                    </HStack>

                    {p.sourceLabel && (
                      <Text fontSize="xs" color="ink.400" lineHeight={1.5}>
                        Sumber: {p.sourceLabel}
                      </Text>
                    )}
                  </Stack>
                </Flex>
              </Reveal>
            ))}
          </Stack>

          {/* Footer CTA */}
          <Reveal>
            <Box
              mt={{ base: 12, md: 20 }}
              bg="teal.700"
              color="white"
              rounded="3xl"
              p={{ base: 8, md: 12 }}
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-br, teal.700, teal.900)"
                opacity={0.9}
              />
              <Stack position="relative" spacing={4} maxW="2xl" mx="auto">
                <Heading size={{ base: "md", md: "lg" }}>Jelajahi Pantai Bahak Hari Ini</Heading>
                <Text color="whiteAlpha.800" lineHeight={1.7}>
                  Tiket hanya Rp10.000 — nikmati sunset Selat Madura, kuliner olahan laut segar,
                  dan jejak mangrove. Dukung UMKM & konservasi desa.
                </Text>
                <HStack justify="center" spacing={3} pt={2} flexWrap="wrap">
                  <Button
                    as={Link}
                    href="https://www.google.com/maps/search/?api=1&query=-7.7256977,113.1192361"
                    isExternal
                    bg="white"
                    color="teal.700"
                    _hover={{ bg: "sand.50", textDecoration: "none" }}
                    leftIcon={<FiMapPin />}
                    rounded="full"
                  >
                    Rute ke Pantai Bahak
                  </Button>
                  <Button
                    as={Link}
                    href="/kontak"
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.600"
                    _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}
                    rounded="full"
                  >
                    Hubungi Desa
                  </Button>
                </HStack>
                <Text fontSize="xs" color="whiteAlpha.600" pt={2}>
                  Koordinat resmi SIDITA Jatim: -7.7256977037108, 113.11923613987 • Desa Curah
                  Dringu &amp; Dungun, Tongas, Probolinggo
                </Text>
              </Stack>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Layout>
  );
};
