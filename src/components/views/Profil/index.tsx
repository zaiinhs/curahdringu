"use client";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
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
import {
  FiAward,
  FiCheckCircle,
  FiCompass,
  FiEye,
  FiExternalLink,
  FiFlag,
  FiGrid,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MISI, OFFICERS, VILLAGE } from "@/data/site";

export const ProfilView = () => {
  return (
    <Layout
      title="Profil Desa"
      description="Sejarah, visi misi, dan struktur pemerintahan Desa Curah Dringu — desa pesisir Tongas, Probolinggo."
      canonicalPath="/profil"
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

      {/* Struktur perangkat — hierarki baru */}
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SectionHeading
            eyebrow="Pemerintahan"
            title="Struktur Perangkat Desa"
            subtitle="12 personel — dipimpin Kepala Desa Tiyayah, didukung Sekretaris, Bendahara, dan 9 perangkat desa."
          />

          {/* Garis hierarki visual di desktop */}
          <Stack spacing={{ base: 10, md: 12 }}>
            {/* 1. Kepala Desa — featured, centered, dengan foto jika ada */}
            {(() => {
              const kepala = OFFICERS.find((o) => o.group === "kepala") ?? OFFICERS[0];
              const sekretaris = OFFICERS.find((o) => o.group === "sekretaris");
              const bendahara = OFFICERS.find((o) => o.group === "bendahara");
              const perangkat = OFFICERS.filter((o) => o.group === "perangkat");
              return (
                <>
                  {/* KEPALA DESA */}
                  <Reveal>
                    <Stack align="center" spacing={6}>
                      <Tag
                        colorScheme="teal"
                        rounded="full"
                        px={4}
                        py={1.5}
                        fontWeight={700}
                        display="flex"
                        alignItems="center"
                        gap={2}
                      >
                        <Icon as={FiFlag} /> Pimpinan Desa
                      </Tag>

                      <Stack
                        align="center"
                        spacing={5}
                        bg="linear-gradient(135deg, #0f766e 0%, #134e4a 100%)"
                        color="white"
                        rounded="3xl"
                        p={{ base: 6, md: 10 }}
                        maxW="520px"
                        w="full"
                        textAlign="center"
                        position="relative"
                        overflow="hidden"
                        boxShadow="0 24px 60px rgba(10,68,61,0.28)"
                      >
                        <Box
                          position="absolute"
                          top="-40px"
                          right="-40px"
                          w="140px"
                          h="140px"
                          bg="whiteAlpha.100"
                          rounded="full"
                          filter="blur(1px)"
                        />
                        <Box
                          position="absolute"
                          bottom="-30px"
                          left="-30px"
                          w="120px"
                          h="120px"
                          bg="whiteAlpha.100"
                          rounded="full"
                        />

                        {/* Foto / Avatar */}
                        {kepala.photo ? (
                          <Box
                            w={{ base: "140px", md: "160px" }}
                            h={{ base: "140px", md: "160px" }}
                            rounded="full"
                            overflow="hidden"
                            border="4px solid"
                            borderColor="whiteAlpha.400"
                            boxShadow="0 12px 32px rgba(0,0,0,0.25)"
                            position="relative"
                          >
                            <Image
                              src={kepala.photo}
                              alt={`Foto ${kepala.name} - ${kepala.role}`}
                              w="full"
                              h="full"
                              objectFit="cover"
                              fallbackSrc="/content.jpeg"
                            />
                          </Box>
                        ) : (
                          <Avatar
                            name={kepala.name}
                            size="2xl"
                            bg="white"
                            color="teal.700"
                            fontWeight={800}
                            border="4px solid"
                            borderColor="whiteAlpha.400"
                          />
                        )}

                        <Stack spacing={1} position="relative">
                          <HStack justify="center" spacing={2}>
                            <Icon as={FiAward} color="yellow.300" />
                            <Text fontSize="xs" letterSpacing="widest" fontWeight={700} color="teal.100">
                              KEPALA DESA
                            </Text>
                          </HStack>
                          <Heading size="lg" color="white">
                            {kepala.name}
                          </Heading>
                          <Text color="teal.100" fontWeight={600}>
                            {kepala.role} • {VILLAGE.name}
                          </Text>
                        </Stack>

                        <Text color="whiteAlpha.800" fontSize="sm" lineHeight={1.7} maxW="420px">
                          Memimpin tata kelola tertib & pembangunan terukur — disorot Pojok Nasional (30 Mei
                          2026) dan Radar Patroli (Okt 2024) sebagai penggerak penguatan wisata Bahak &amp; UMKM.
                        </Text>

                        {kepala.photo && (
                          <Link
                            href="https://pojoknasional.co.id/desa-curahdringu-tata-kelola-tertib-pembangunan-terukur/"
                            isExternal
                            fontSize="xs"
                            color="teal.100"
                            display="flex"
                            alignItems="center"
                            gap={1}
                            _hover={{ color: "white" }}
                          >
                            Sumber foto: Pojok Nasional <Icon as={FiExternalLink} />
                          </Link>
                        )}
                      </Stack>

                      {/* connector line */}
                      <Box w="2px" h="28px" bg="ink.200" rounded="full" display={{ base: "none", md: "block" }} />
                    </Stack>
                  </Reveal>

                  {/* 2. Sekretaris & Bendahara — level 2 */}
                  <Reveal delay={0.08}>
                    <Stack spacing={4}>
                      <HStack justify="center">
                        <Icon as={FiShield} color="brand.500" />
                        <Text fontSize="sm" fontWeight={700} letterSpacing="wider" color="ink.500">
                          SEKRETARIAT
                        </Text>
                      </HStack>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="720px" mx="auto" w="full">
                        {[sekretaris, bendahara].filter(Boolean).map((o) => (
                          <Stack
                            key={o!.name}
                            align="center"
                            spacing={4}
                            bg="white"
                            border="1px solid"
                            borderColor="ink.100"
                            rounded="2xl"
                            p={{ base: 6, md: 8 }}
                            textAlign="center"
                            position="relative"
                            boxShadow="0 8px 24px rgba(10,68,61,0.06)"
                            _hover={{ boxShadow: "0 14px 36px rgba(10,68,61,0.10)", transform: "translateY(-3px)" }}
                            transition="all 0.25s"
                          >
                            <Badge
                              colorScheme={o!.group === "sekretaris" ? "teal" : "orange"}
                              rounded="full"
                              px={3}
                              py={1}
                              fontSize="xs"
                            >
                              {o!.group === "sekretaris" ? "SEKRETARIS DESA" : "BENDAHARA"}
                            </Badge>

                            {o!.photo ? (
                              <Image
                                src={o!.photo}
                                alt={o!.name}
                                w="96px"
                                h="96px"
                                rounded="full"
                                objectFit="cover"
                                border="3px solid"
                                borderColor="ink.100"
                                fallbackSrc="/content.jpeg"
                              />
                            ) : (
                              <Avatar
                                name={o!.name}
                                size="xl"
                                bg={o!.group === "sekretaris" ? "teal.500" : "orange.400"}
                                color="white"
                              />
                            )}

                            <Box>
                              <Heading size="md">{o!.name}</Heading>
                              <Text color="brand.600" fontWeight={600} fontSize="sm">
                                {o!.role}
                              </Text>
                              {!o!.photo && (
                                <Text fontSize="xs" color="ink.400" mt={2} lineHeight={1.5}>
                                  Foto belum tersedia di sumber publik — menampilkan inisial. Kirim foto resmi
                                  untuk ditampilkan.
                                </Text>
                              )}
                            </Box>
                          </Stack>
                        ))}
                      </SimpleGrid>

                      {/* connector to perangkat grid */}
                      <Flex justify="center" display={{ base: "none", md: "flex" }}>
                        <Box w="2px" h="28px" bg="ink.200" rounded="full" />
                      </Flex>
                      <Box
                        w={{ base: "60%", md: "720px" }}
                        h="2px"
                        bg="ink.200"
                        mx="auto"
                        rounded="full"
                        display={{ base: "none", md: "block" }}
                      />
                    </Stack>
                  </Reveal>

                  {/* 3. Perangkat Lain — 9 orang */}
                  <Reveal delay={0.16}>
                    <Stack spacing={5}>
                      <HStack justify="center">
                        <Icon as={FiGrid} color="brand.500" />
                        <Text fontSize="sm" fontWeight={700} letterSpacing="wider" color="ink.500">
                          PERANGKAT DESA — 9 PERSONEL
                        </Text>
                      </HStack>

                      <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} spacing={{ base: 4, md: 6 }}>
                        {perangkat.map((o, idx) => (
                          <Reveal key={o.name} delay={(idx % 3) * 0.06} h="full">
                            <Stack
                              align="center"
                              spacing={3}
                              bg="ink.50"
                              rounded="2xl"
                              p={{ base: 5, md: 6 }}
                              textAlign="center"
                              h="full"
                              border="1px solid"
                              borderColor="transparent"
                              transition="all 0.25s"
                              _hover={{
                                bg: "white",
                                borderColor: "ink.100",
                                boxShadow: "0 14px 36px rgba(10,68,61,0.08)",
                                transform: "translateY(-4px)",
                              }}
                            >
                              {o.photo ? (
                                <Image
                                  src={o.photo}
                                  alt={o.name}
                                  w="72px"
                                  h="72px"
                                  rounded="full"
                                  objectFit="cover"
                                  fallbackSrc="/content.jpeg"
                                />
                              ) : (
                                <Avatar name={o.name} size={{ base: "lg", md: "xl" }} bg="brand.500" color="white" />
                              )}
                              <Box>
                                <Heading size="sm" lineHeight={1.3}>
                                  {o.name}
                                </Heading>
                                <Text color="ink.500" fontWeight={600} fontSize="xs" mt={1}>
                                  {o.role}
                                </Text>
                              </Box>
                            </Stack>
                          </Reveal>
                        ))}
                      </SimpleGrid>

                      <Box
                        bg="sand.50"
                        border="1px dashed"
                        borderColor="sand.200"
                        rounded="xl"
                        p={4}
                        maxW="720px"
                        mx="auto"
                        w="full"
                      >
                        <HStack spacing={3} align="start">
                          <Icon as={FiUsers} color="sand.600" mt={1} />
                          <Stack spacing={1}>
                            <Text fontSize="sm" fontWeight={700} color="ink.700">
                              Total 12 personel aktif
                            </Text>
                            <Text fontSize="xs" color="ink.500" lineHeight={1.6}>
                              Struktur diperbarui sesuai arahan terbaru. Foto Sekretaris (Suharto) &amp; Bendahara
                              (Rahman) belum ditemukan di Google/berita publik (Radar Patroli, Pojok Nasional,
                              Pemkab Probolinggo) — sistem menampilkan avatar inisial. Jika desa memiliki foto
                              resmi, ganti field <code>photo</code> di <code>src/data/site.ts:680</code>.
                            </Text>
                          </Stack>
                        </HStack>
                      </Box>
                    </Stack>
                  </Reveal>
                </>
              );
            })()}
          </Stack>

          <Divider my={{ base: 10, md: 14 }} borderColor="ink.100" display="none" />
        </Container>
      </Box>

      {/* Sorotan Kepemimpinan & Tata Kelola — ditonjolkan */}
      <Box
        bg="teal.800"
        position="relative"
        overflow="hidden"
        py={{ base: 14, md: 20 }}
      >
        {/* dekorasi blur */}
        <Box position="absolute" top="-80px" right="-80px" w="300px" h="300px" bg="whiteAlpha.100" rounded="full" filter="blur(40px)" />
        <Box position="absolute" bottom="-60px" left="-60px" w="240px" h="240px" bg="teal.600" rounded="full" opacity={0.4} filter="blur(30px)" />
        <Container maxW="7xl" position="relative">
          <Reveal>
            <Stack textAlign="center" spacing={3} maxW="3xl" mx="auto" mb={{ base: 10, md: 12 }}>
              <Tag colorScheme="whiteAlpha" color="white" bg="whiteAlpha.200" rounded="full" px={4} py={1} w="fit-content" mx="auto" fontWeight={700} letterSpacing="wider" fontSize="xs">
                SOROTAN MEDIA & ARAH PEMBANGUNAN
              </Tag>
              <Heading color="white" size={{ base: "lg", md: "xl" }} lineHeight={1.2}>
                Kepemimpinan yang Disorot, Tata Kelola yang Terukur
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                Tiga pilar yang menjadikan Curah Dringu rujukan desa pesisir — dari peningkatan kapasitas perangkat hingga penguatan ekonomi berbasis potensi lokal.
              </Text>
            </Stack>
          </Reveal>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 6 }} alignItems="stretch">
            {/* 1. Pimpinan */}
            <Reveal delay={0.05} h="full">
              <Stack
                bg="white"
                rounded="2xl"
                p={{ base: 7, md: 8 }}
                spacing={5}
                h="full"
                position="relative"
                overflow="hidden"
                boxShadow="0 16px 40px rgba(0,0,0,0.18)"
                _hover={{ transform: "translateY(-6px)", boxShadow: "0 24px 56px rgba(0,0,0,0.22)" }}
                transition="all 0.3s"
                borderTop="4px solid"
                borderColor="teal.500"
              >
                <Flex
                  w={14}
                  h={14}
                  rounded="2xl"
                  bg="teal.50"
                  color="teal.600"
                  align="center"
                  justify="center"
                  fontSize="2xl"
                >
                  <Icon as={FiFlag} boxSize={7} />
                </Flex>
                <Stack spacing={2}>
                  <HStack spacing={2}>
                    <Badge colorScheme="teal" rounded="full" px={3} py={1} fontSize="xs">
                      7 Okt 2024
                    </Badge>
                    <Text fontSize="xs" color="ink.400" fontWeight={600}>
                      Radar Patroli
                    </Text>
                  </HStack>
                  <Heading size="md" color="ink.800" lineHeight={1.3}>
                    Pimpinan
                  </Heading>
                  <Text color="ink.600" lineHeight={1.7} fontSize="sm">
                    Kepala Desa <b>Tiyayah</b> memimpin langsung <b>peningkatan kapasitas perangkat desa</b> di
                    Balai Desa — didampingi suami Sugiono — untuk meningkatkan kompetensi & kinerja pelayanan
                    seiring perkembangan desa.
                  </Text>
                </Stack>
                <Link
                  href="https://radarpatroli.com/2024/10/07/kepala-desa-curah-dringu-gelar-peningkatan-kapasitas-perangkat-desa/"
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  color="teal.600"
                  fontWeight={700}
                  fontSize="sm"
                  mt="auto"
                  _hover={{ color: "teal.700", gap: "10px" }}
                  transition="all 0.2s"
                >
                  Baca sumber <Icon as={FiExternalLink} />
                </Link>
              </Stack>
            </Reveal>

            {/* 2. Tata Kelola */}
            <Reveal delay={0.12} h="full">
              <Stack
                bg="white"
                rounded="2xl"
                p={{ base: 7, md: 8 }}
                spacing={5}
                h="full"
                position="relative"
                boxShadow="0 16px 40px rgba(0,0,0,0.18)"
                _hover={{ transform: "translateY(-6px)", boxShadow: "0 24px 56px rgba(0,0,0,0.22)" }}
                transition="all 0.3s"
                borderTop="4px solid"
                borderColor="orange.400"
              >
                <Flex w={14} h={14} rounded="2xl" bg="orange.50" color="orange.500" align="center" justify="center">
                  <Icon as={FiShield} boxSize={7} />
                </Flex>
                <Stack spacing={2}>
                  <HStack spacing={2}>
                    <Badge colorScheme="orange" rounded="full" px={3} py={1} fontSize="xs">
                      30 Mei 2026
                    </Badge>
                    <Text fontSize="xs" color="ink.400" fontWeight={600}>
                      Pojok Nasional
                    </Text>
                  </HStack>
                  <Heading size="md" color="ink.800" lineHeight={1.3}>
                    Tata Kelola
                  </Heading>
                  <Text color="ink.600" lineHeight={1.7} fontSize="sm">
                    Disorot sebagai <b>“Tata Kelola Tertib, Pembangunan Terukur”</b> — kemajuan konsisten &amp;
                    terarah di bawah kepemimpinan Tiyayah, menjadi rujukan transparansi & akuntabilitas di Tongas.
                  </Text>
                </Stack>
                <Link
                  href="https://pojoknasional.co.id/desa-curahdringu-tata-kelola-tertib-pembangunan-terukur/"
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  color="orange.600"
                  fontWeight={700}
                  fontSize="sm"
                  mt="auto"
                  _hover={{ color: "orange.700", gap: "10px" }}
                  transition="all 0.2s"
                >
                  Baca sumber <Icon as={FiExternalLink} />
                </Link>
              </Stack>
            </Reveal>

            {/* 3. Fokus */}
            <Reveal delay={0.19} h="full">
              <Stack
                bg="white"
                rounded="2xl"
                p={{ base: 7, md: 8 }}
                spacing={5}
                h="full"
                position="relative"
                boxShadow="0 16px 40px rgba(0,0,0,0.18)"
                _hover={{ transform: "translateY(-6px)", boxShadow: "0 24px 56px rgba(0,0,0,0.22)" }}
                transition="all 0.3s"
                borderTop="4px solid"
                borderColor="brand.500"
              >
                <Flex w={14} h={14} rounded="2xl" bg="brand.50" color="brand.600" align="center" justify="center">
                  <Icon as={FiCompass} boxSize={7} />
                </Flex>
                <Stack spacing={2}>
                  <HStack spacing={2}>
                    <Badge colorScheme="green" rounded="full" px={3} py={1} fontSize="xs">
                      2024–2026
                    </Badge>
                    <Text fontSize="xs" color="ink.400" fontWeight={600}>
                      Arah Pembangunan
                    </Text>
                  </HStack>
                  <Heading size="md" color="ink.800" lineHeight={1.3}>
                    Fokus 2024–2026
                  </Heading>
                  <Text color="ink.600" lineHeight={1.7} fontSize="sm">
                    <b>Penguatan wisata Pantai Bahak, UMKM olahan laut & pertanian</b> — dua pilar bahari &amp;
                    agraris — kolaborasi <b>BUMDes Lancar Jaya</b> dengan kelompok tani & nelayan untuk PADes.
                  </Text>
                </Stack>
                <HStack spacing={3} mt="auto" pt={1}>
                  <Link
                    href="/potensi"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    color="brand.600"
                    fontWeight={700}
                    fontSize="sm"
                    _hover={{ color: "brand.700", gap: "10px" }}
                    transition="all 0.2s"
                  >
                    Lihat Potensi <Icon as={FiExternalLink} />
                  </Link>
                  <Text color="ink.300">•</Text>
                  <Link
                    href="/bumdesa"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    color="ink.500"
                    fontWeight={700}
                    fontSize="sm"
                    _hover={{ color: "ink.700" }}
                  >
                    BUMDes
                  </Link>
                </HStack>
              </Stack>
            </Reveal>
          </SimpleGrid>

          <Reveal delay={0.22}>
            <Flex
              justify="center"
              align="center"
              gap={2}
              mt={8}
              color="whiteAlpha.700"
              fontSize="xs"
              textAlign="center"
              flexWrap="wrap"
            >
              <Icon as={FiUsers} />
              <Text>12 personel siap melayani • Data & foto diperbarui Oktober 2024–Mei 2026</Text>
            </Flex>
          </Reveal>
        </Container>
      </Box>
    </Layout>
  );
};
