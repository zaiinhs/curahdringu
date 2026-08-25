"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FiAlertCircle, FiGrid, FiHome, FiMapPin, FiUsers } from "react-icons/fi";
import { STATS } from "@/data/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ElementType> = {
  "Total Penduduk": FiUsers,
  "Kepala Keluarga": FiHome,
  "Luas Wilayah": FiMapPin,
  "RT / RW": FiGrid,
};

export const StatsComponent = () => {
  return (
    <Box
      bg="brand.900"
      color="white"
      py={{ base: 14, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* dekor blur */}
      <Box position="absolute" top="-100px" left="-100px" w="400px" h="400px" bg="whiteAlpha.100" rounded="full" filter="blur(60px)" />
      <Box position="absolute" bottom="-80px" right="-80px" w="300px" h="300px" bg="sand.400" opacity={0.08} rounded="full" filter="blur(40px)" />
      <Container maxW="7xl" position="relative">
        <Reveal>
          <Stack textAlign="center" spacing={4} maxW="3xl" mx="auto" mb={{ base: 8, md: 10 }}>
            <HStack justify="center" spacing={2} flexWrap="wrap">
              <Badge bg="whiteAlpha.200" color="sand.200" rounded="full" px={3} py={1} fontSize="xs" letterSpacing="wider">
                DESA DALAM ANGKA
              </Badge>
              <Badge colorScheme="orange" rounded="full" px={3} py={1} fontSize="xs">
                ESTIMASI • MENUNGGU BPS DESA
              </Badge>
            </HStack>
            <Stack spacing={3} align="center">
              <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} lineHeight={1.15} color="white">
                Potret Curah Dringu Hari Ini
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                Belum ada publikasi resmi desa-level yang terbuka online per 28 Agu 2026 — angka di bawah adalah rekap
                internal Kantor Desa (estimasi) yang akan diganti saat BPS merilis.
              </Text>
            </Stack>
          </Stack>
        </Reveal>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, md: 6 }}>
          {STATS.map((s, i) => {
            const IconCmp = iconMap[s.label] ?? FiUsers;
            return (
              <Reveal key={s.label} delay={i * 0.08} h="full">
                <Stack
                  spacing={3}
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  rounded="2xl"
                  p={{ base: 5, md: 6 }}
                  textAlign="center"
                  h="full"
                  position="relative"
                  transition="all 0.3s"
                  _hover={{ bg: "whiteAlpha.200", transform: "translateY(-4px)", borderColor: "whiteAlpha.300" }}
                >
                  {/* badge estimasi di pojok */}
                  {s.isEstimate && (
                    <Tooltip label={s.note ?? s.source} hasArrow placement="top" bg="ink.800" color="white" maxW="280px">
                      <Badge
                        position="absolute"
                        top={3}
                        right={3}
                        colorScheme="orange"
                        fontSize="10px"
                        px={2}
                        py={0.5}
                        rounded="full"
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <Icon as={FiAlertCircle} boxSize={3} /> ESTIMASI
                      </Badge>
                    </Tooltip>
                  )}

                  <Flex
                    w={10}
                    h={10}
                    rounded="xl"
                    bg="whiteAlpha.200"
                    color="sand.300"
                    align="center"
                    justify="center"
                    mx="auto"
                  >
                    <Icon as={IconCmp} boxSize={5} />
                  </Flex>

                  <Box>
                    <CountUp
                      end={s.value}
                      suffix={s.suffix}
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight={800}
                      color="sand.300"
                      lineHeight={1}
                    />
                    <Text fontWeight={700} fontSize={{ base: "sm", md: "md" }} mt={1}>
                      {s.label}
                    </Text>
                    <Text fontSize="xs" color="whiteAlpha.700" lineHeight={1.5} mt={1}>
                      {s.helper}
                    </Text>
                  </Box>

                  {s.source && (
                    <Text fontSize="10px" color="whiteAlpha.600" lineHeight={1.4} borderTop="1px solid" borderColor="whiteAlpha.100" pt={2} mt={1}>
                      Sumber: {s.source}
                    </Text>
                  )}
                </Stack>
              </Reveal>
            );
          })}
        </SimpleGrid>

        {/* Kode wilayah & kode pos — data riil terverifikasi */}
        <Reveal delay={0.14}>
          <Flex
            justify="center"
            gap={{ base: 3, md: 6 }}
            flexWrap="wrap"
            mt={{ base: 8, md: 10 }}
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="2xl"
            px={{ base: 4, md: 6 }}
            py={4}
          >
            <HStack spacing={2} color="whiteAlpha.800" fontSize="sm">
              <Icon as={FiMapPin} color="sand.300" />
              <Text>
                Kode Wilayah: <b style={{ color: "white" }}>35.13.23.2005</b>
              </Text>
            </HStack>
            <HStack spacing={2} color="whiteAlpha.800" fontSize="sm">
              <Icon as={FiGrid} color="sand.300" />
              <Text>
                Kode Pos: <b style={{ color: "white" }}>67252</b>
              </Text>
            </HStack>
            <HStack spacing={2} color="whiteAlpha.800" fontSize="sm">
              <Icon as={FiHome} color="sand.300" />
              <Text>
                Kec. Tongas: <b style={{ color: "white" }}>77,95 km²</b> (BPS)
              </Text>
            </HStack>
          </Flex>
        </Reveal>


      </Container>
    </Box>
  );
};
