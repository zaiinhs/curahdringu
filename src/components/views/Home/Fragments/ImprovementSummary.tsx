"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiFileText,
  FiGrid,
  FiMapPin,
  FiMessageSquare,
  FiRadio,
  FiUsers,
} from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Improvement = {
  icon: React.ElementType;
  title: string;
  href: string;
  badge: string;
  badgeColor: string;
  desc: string;
  highlight: string;
  cta: string;
};

const IMPROVEMENTS: Improvement[] = [
  {
    icon: FiUsers,
    title: "Profil Desa",
    href: "/profil",
    badge: "12 Perangkat",
    badgeColor: "teal",
    desc: "Hierarki baru: Tiyayah (Kepala Desa), Suharto (Sekretaris), Rahman (Bendahara) + 9 perangkat.",
    highlight: "Foto Tiyayah terverifikasi (Pojok Nasional) + 3 pilar sorotan dipertebal.",
    cta: "Lihat Struktur",
  },
  {
    icon: FiFileText,
    title: "Layanan",
    href: "/layanan",
    badge: "6 Layanan",
    badgeColor: "blue",
    desc: "Surat Pengantar, Domisili, KK, SKTM, Izin Usaha, Pindah — syarat jelas & transparan.",
    highlight: "Alur 4 langkah: Siapkan → Datang → Verifikasi → Selesai.",
    cta: "Urus Surat",
  },
  {
    icon: FiRadio,
    title: "Berita & Pengumuman",
    href: "/berita",
    badge: "13+ Artikel",
    badgeColor: "orange",
    desc: "ISR 3600 + 13 berita terverifikasi (Radar Bromo, Pemkab, KLH, UNAIR).",
    highlight: "Tab Berita/Pengumuman, filter sumber/topik/tahun, infinite scroll.",
    cta: "Baca Berita",
  },
  {
    icon: FiMapPin,
    title: "Potensi Desa",
    href: "/potensi",
    badge: "6 Unggulan",
    badgeColor: "green",
    desc: "Dari mock 3 → 6 potensi riil: Pantai Bahak Indah, Mangrove, Petik Laut, UMKM, Sawah, BUMDes.",
    highlight: "Tiket Rp10k, koordinat -7.7256/113.1192, 5.000 mangrove, pasar rakyat.",
    cta: "Jelajah Potensi",
  },
  {
    icon: FiBriefcase,
    title: "BUMDesa Lancar Jaya",
    href: "/bumdesa",
    badge: "Rp144 Jt Modal",
    badgeColor: "purple",
    desc: "Laporan riil Agu 2025–Agu 2026 per 23 Agu 2026 — transparan & terperinci.",
    highlight: "4 KPI, grafik 13 bulan, 24 rincian beban, aset kambing 3 kategori.",
    cta: "Lihat Laporan",
  },
  {
    icon: FiMessageSquare,
    title: "Kontak & Aspirasi",
    href: "/kontak",
    badge: "Aktif",
    badgeColor: "pink",
    desc: "Alamat, telepon, email, jam layanan + peta embed & form 4 kategori.",
    highlight: "Kategori: Pengaduan, Aspirasi, Pertanyaan Layanan, Lainnya.",
    cta: "Hubungi Desa",
  },
];

export const ImprovementSummary = () => {
  return (
    <Box bg="white" py={{ base: 14, md: 20 }} borderTop="1px solid" borderColor="ink.100">
      <Container maxW="7xl">
        <Reveal>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto" mb={{ base: 8, md: 10 }}>
            <HStack justify="center" spacing={2} flexWrap="wrap">
              <Badge colorScheme="teal" rounded="full" px={3} py={1} fontSize="xs">
                PEMBARUAN MENYELURUH
              </Badge>
              <Badge colorScheme="sand" rounded="full" px={3} py={1} fontSize="xs">
                AGUSTUS 2026
              </Badge>
              <Badge variant="outline" colorScheme="gray" rounded="full" px={3} py={1} fontSize="xs">
                6 MENU • 28+ DATA RIIL
              </Badge>
            </HStack>
            <SectionHeading
              eyebrow="Apa yang Baru"
              title="Semua Halaman Menu Telah Ditingkatkan"
              subtitle="Dari mock data → data terverifikasi. Home kini merangkum pembaruan tiap menu agar warga langsung tahu yang berubah."
            />
          </Stack>
        </Reveal>

        {/* Quick stats bar */}
        <Reveal delay={0.06}>
          <Flex
            justify="center"
            gap={{ base: 3, md: 8 }}
            flexWrap="wrap"
            bg="ink.50"
            border="1px solid"
            borderColor="ink.100"
            rounded="2xl"
            px={{ base: 4, md: 6 }}
            py={4}
            mb={{ base: 8, md: 10 }}
            maxW="4xl"
            mx="auto"
          >
            <HStack spacing={2}>
              <Box w={2} h={2} rounded="full" bg="teal.500" />
              <Text fontSize="sm">
                <b>6</b> menu diperbarui
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Box w={2} h={2} rounded="full" bg="orange.400" />
              <Text fontSize="sm">
                <b>6</b> potensi + <b>12</b> perangkat
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Box w={2} h={2} rounded="full" bg="brand.500" />
              <Text fontSize="sm">
                <b>13</b> berita terverifikasi
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Box w={2} h={2} rounded="full" bg="purple.400" />
              <Text fontSize="sm">Sumber: SIDITA • Pemkab • KLH • Radar • Pojok</Text>
            </HStack>
          </Flex>
        </Reveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 5, md: 6 }}>
          {IMPROVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} h="full">
              <Stack
                as={NextLink}
                href={item.href}
                bg="white"
                border="1px solid"
                borderColor="ink.100"
                rounded="2xl"
                p={6}
                h="full"
                spacing={4}
                position="relative"
                overflow="hidden"
                transition="all 0.25s"
                _hover={{
                  borderColor: "brand.200",
                  boxShadow: "0 16px 40px rgba(10,68,61,0.10)",
                  transform: "translateY(-4px)",
                  textDecoration: "none",
                }}
                role="group"
              >
                {/* top accent */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bg={`${item.badgeColor}.400`}
                  opacity={0.9}
                />

                <Flex justify="space-between" align="start" gap={3}>
                  <Flex
                    w={12}
                    h={12}
                    rounded="xl"
                    bg={`${item.badgeColor}.50`}
                    color={`${item.badgeColor}.600`}
                    align="center"
                    justify="center"
                    flexShrink={0}
                    transition="all 0.25s"
                    _groupHover={{ bg: `${item.badgeColor}.500`, color: "white" }}
                  >
                    <Icon as={item.icon} boxSize={6} />
                  </Flex>
                  <Badge colorScheme={item.badgeColor} rounded="full" px={3} py={1} fontSize="xs" flexShrink={0}>
                    {item.badge}
                  </Badge>
                </Flex>

                <Box>
                  <Heading size="md" mb={1} display="flex" alignItems="center" gap={2}>
                    {item.title}
                    <Icon
                      as={FiArrowRight}
                      boxSize={4}
                      color="ink.300"
                      transition="all 0.2s"
                      _groupHover={{ color: "brand.500", transform: "translateX(4px)" }}
                    />
                  </Heading>
                  <Text color="ink.600" fontSize="sm" lineHeight={1.6}>
                    {item.desc}
                  </Text>
                </Box>

                <Box bg={`${item.badgeColor}.50`} rounded="xl" px={4} py={3} borderLeft="3px solid" borderColor={`${item.badgeColor}.300`}>
                  <Text fontSize="xs" fontWeight={700} color={`${item.badgeColor}.700`} mb={1} textTransform="uppercase" letterSpacing="wide">
                    Highlight
                  </Text>
                  <Text fontSize="sm" color="ink.700" lineHeight={1.6}>
                    {item.highlight}
                  </Text>
                </Box>

                <Flex align="center" gap={1} color="brand.600" fontWeight={700} fontSize="sm" mt="auto" pt={1}>
                  {item.cta} <Icon as={FiArrowRight} />
                </Flex>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>

        {/* Footer note + CTA */}
        <Reveal delay={0.18}>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
            gap={4}
            bg="teal.800"
            color="white"
            rounded="2xl"
            px={{ base: 6, md: 8 }}
            py={{ base: 6, md: 6 }}
            mt={{ base: 10, md: 12 }}
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" top="-40px" right="-40px" w="160px" h="160px" bg="whiteAlpha.100" rounded="full" />
            <Stack spacing={1} position="relative" maxW="2xl">
              <HStack>
                <Icon as={FiGrid} color="teal.200" />
                <Text fontSize="xs" fontWeight={700} letterSpacing="wider" color="teal.200">
                  JELAJAHI LEBIH DALAM
                </Text>
              </HStack>
              <Text fontWeight={700} fontSize={{ base: "md", md: "lg" }}>
                Semua menu sudah sinkron — data mock diganti sumber terverifikasi.
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800" lineHeight={1.6}>
                Buka tiap halaman untuk detail lengkap: struktur 12 perangkat, 6 potensi, 6 layanan, laporan BUMDesa riil, dan berita 13 artikel.
              </Text>
            </Stack>
            <HStack spacing={3} flexShrink={0} position="relative" flexWrap="wrap">
              <Link
                as={NextLink}
                href="/profil"
                bg="white"
                color="teal.700"
                px={6}
                py={3}
                rounded="full"
                fontWeight={700}
                fontSize="sm"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ bg: "sand.50", textDecoration: "none" }}
              >
                Mulai dari Profil <Icon as={FiArrowRight} />
              </Link>
              <Link
                as={NextLink}
                href="/potensi"
                variant="outline"
                color="white"
                border="1px solid"
                borderColor="whiteAlpha.400"
                px={6}
                py={3}
                rounded="full"
                fontWeight={700}
                fontSize="sm"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}
              >
                Lihat Potensi
              </Link>
            </HStack>
          </Stack>
        </Reveal>

        <Text textAlign="center" fontSize="xs" color="ink.400" mt={4}>
          Diperbarui: Potensi & Profil (Agustus 2026) • Berita ISR • BUMDesa Keuangan Riil 23 Agu 2026
        </Text>
      </Container>
    </Box>
  );
};
