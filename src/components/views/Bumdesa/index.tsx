"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiBriefcase, FiDownload, FiEye, FiEyeOff, FiLock, FiPhone, FiShield } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { BUMDesa } from "@/data/site";
import { BUMDESA_FINANCIAL as F } from "@/data/bumdesa-financial";

const CORRECT_PIN = "300900";
const STORAGE_KEY = "bumdesa_pin_verified";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const money = (n: number) => rupiah.format(n);

const Kpi = ({ label, value, tone = "ink.800" }: { label: string; value: number; tone?: string }) => (
  <Box bg="whiteAlpha.900" border="1px solid" borderColor="whiteAlpha.300" rounded="2xl" p={{ base: 5, md: 6 }}>
    <Text color="ink.600" fontSize="sm">{label}</Text><Flex mt={2} align="baseline" gap={1}><Text color={tone} fontSize="sm" fontWeight={700}>Rp</Text><CountUp end={value} fontSize={{ base: "xl", md: "2xl" }} fontWeight={800} color={tone} /></Flex>
  </Box>
);

export const BumdesaView = () => {
  const maxExpense = Math.max(...F.monthly.map((item) => item.expense));
  const toast = useToast();
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const ok = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1";
    if (ok) setUnlocked(true);
    setChecking(false);
  }, []);

  useEffect(() => {
    if (lockedUntil === null) return;
    const t = setInterval(() => {
      if (Date.now() >= lockedUntil) {
        setLockedUntil(null);
        setAttempts(0);
        setError("");
      }
    }, 1000);
    return () => clearInterval(t);
  }, [lockedUntil]);

  const isLocked = lockedUntil !== null && Date.now() < lockedUntil;
  const remainingSec = lockedUntil ? Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000)) : 0;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;
    if (pin === CORRECT_PIN) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError("");
      setPin("");
      toast({ title: "Akses dibuka", description: "PIN benar — laporan BUMDesa ditampilkan.", status: "success", duration: 2500, isClosable: true, position: "top" });
    } else {
      const next = attempts + 1;
      setAttempts(next);
      setError(`PIN salah — percobaan ${next}/5`);
      if (next >= 5) {
        const until = Date.now() + 30_000;
        setLockedUntil(until);
        setError("Terlalu banyak percobaan. Terkunci 30 detik.");
      }
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
    setPin("");
    setError("");
    setAttempts(0);
    toast({ title: "Dikunci kembali", status: "info", duration: 2000, isClosable: true, position: "top" });
  };

  if (checking) {
    return (
      <Layout title="BUM Desa LANCAR JAYA" description="Memeriksa akses..." canonicalPath="/bumdesa" noIndex>
        <Box bg="white" py={{ base: 16, md: 24 }} textAlign="center">
          <Text color="ink.500">Memeriksa akses...</Text>
        </Box>
      </Layout>
    );
  }

  if (!unlocked) {
    return (
      <Layout title="BUM Desa — Akses Terbatas" description="Masukkan PIN untuk melihat laporan keuangan BUM Desa Lancar Jaya." canonicalPath="/bumdesa" noIndex>
        <PageHero
          current="BUM Desa"
          title="Akses Terbatas"
          subtitle="Laporan keuangan BUM Desa Lancar Jaya diproteksi PIN. Masukkan 6 digit PIN untuk melanjutkan."
        />
        <Box bg="white" py={{ base: 10, md: 16 }}>
          <Container maxW="7xl">
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 12 }} align="center" justify="center">
              <Reveal flex="1" maxW="520px" w="full">
                <Stack
                  as="form"
                  onSubmit={handleUnlock}
                  bg="white"
                  border="1px solid"
                  borderColor="ink.100"
                  rounded="3xl"
                  p={{ base: 6, md: 8 }}
                  spacing={5}
                  boxShadow="0 16px 40px rgba(10,68,61,0.08)"
                >
                  <Flex w={14} h={14} rounded="2xl" bg="brand.50" color="brand.600" align="center" justify="center">
                    <Icon as={FiLock} boxSize={7} />
                  </Flex>
                  <Stack spacing={1}>
                    <Heading size="md">Masukkan PIN BUMDesa</Heading>
                    <Text color="ink.500" fontSize="sm">
                      Hanya perangkat desa & pihak berwenang yang memiliki PIN 6 digit.
                    </Text>
                  </Stack>

                  <Stack spacing={3}>
                    <Text fontSize="sm" fontWeight={700} color="ink.700">
                      PIN
                    </Text>
                    <InputGroup size="lg">
                      <Input
                        type={showPin ? "text" : "password"}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={6}
                        placeholder="••••••"
                        value={pin}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 6);
                          setPin(v);
                          if (error) setError("");
                        }}
                        bg="ink.50"
                        rounded="xl"
                        letterSpacing="0.3em"
                        textAlign="center"
                        fontWeight={700}
                        fontSize="lg"
                        focusBorderColor="brand.500"
                        autoFocus
                      />
                      <InputRightElement h="full" pr={2}>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setShowPin((s) => !s)}
                          aria-label={showPin ? "Sembunyikan PIN" : "Lihat PIN"}
                        >
                          <Icon as={showPin ? FiEyeOff : FiEye} />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {error && (
                      <Text color="red.500" fontSize="sm" fontWeight={600}>
                        {error} {isLocked ? `(${remainingSec}s)` : ""}
                      </Text>
                    )}
                  </Stack>

                  <Button
                    type="submit"
                    size="lg"
                    colorScheme="brand"
                    isDisabled={pin.length !== 6 || isLocked}
                    isLoading={false}
                    leftIcon={<FiShield />}
                    rounded="xl"
                    w="full"
                  >
                    {isLocked ? `Terkunci ${remainingSec}s` : "Buka Laporan"}
                  </Button>

                  <HStack spacing={2} fontSize="xs" color="ink.400" justify="center">
                    <Icon as={FiPhone} boxSize={3} />
                    <Text>Lupa PIN? Hubungi Kepala Desa / Sekretaris Desa.</Text>
                  </HStack>
                </Stack>
              </Reveal>

              <Stack flex="1" spacing={4} maxW="520px" w="full">
                <Reveal>
                  <Box bg="ink.50" rounded="2xl" p={6} border="1px solid" borderColor="ink.100">
                    <HStack spacing={3} mb={3}>
                      <Icon as={FiBriefcase} color="brand.600" boxSize={5} />
                      <Text fontWeight={800} color="ink.800">
                        BUM Desa LANCAR JAYA
                      </Text>
                      <Badge colorScheme="orange" rounded="full">
                        TERKUNCI
                      </Badge>
                    </HStack>
                    <Text fontSize="sm" color="ink.600" lineHeight={1.7}>
                      Laporan keuangan periode <b>{F.period}</b> (23 Agu 2026) bersifat sensitif — hanya dapat diakses
                      setelah verifikasi PIN. Halaman <code>/bumdesa</code> tidak akan merender tabel, grafik, atau
                      rincian 24 beban sebelum PIN benar.
                    </Text>
                  </Box>
                </Reveal>
                <Reveal delay={0.06}>
                  <Box bg="sand.50" rounded="2xl" p={5} border="1px solid" borderColor="sand.200">
                    <Text fontSize="sm" fontWeight={700} color="ink.700">
                      Keamanan:
                    </Text>
                    <Text fontSize="sm" color="ink.600" lineHeight={1.6} mt={1}>
                      • PIN disimpan di <code>sessionStorage</code> — tertutup saat tab ditutup
                      <br />• 5x salah → kunci 30 detik
                      <br />• Ganti PIN di konstanta <code>CORRECT_PIN</code> bila perlu
                    </Text>
                  </Box>
                </Reveal>
              </Stack>
            </Flex>
          </Container>
        </Box>
      </Layout>
    );
  }

  return <Layout title="BUM Desa LANCAR JAYA" description="Laporan keuangan transparan BUM Desa LANCAR JAYA Desa Curah Dringu — periode Agustus 2025–Agustus 2026." canonicalPath="/bumdesa" noIndex>
    <PageHero current="BUM Desa" title={BUMDesa.profile.name} subtitle={`Laporan keuangan riil · ${F.period}`} />
    <Box bg="white" py={{ base: 3, md: 4 }}>
      <Container maxW="7xl">
        <Flex justify="flex-end">
          <Button size="sm" variant="ghost" leftIcon={<FiLock />} onClick={handleLock} colorScheme="gray">
            Kunci Halaman
          </Button>
        </Flex>
      </Container>
    </Box>
    <Box bg="white" py={{ base: 10, md: 16 }}><Container maxW="7xl"><Stack spacing={{ base: 12, md: 20 }}>
      <Reveal><Box bg="brand.700" color="white" rounded={{ base: "2xl", md: "3xl" }} p={{ base: 5, md: 10 }} position="relative" overflow="hidden"><Box position="absolute" w="360px" h="360px" rounded="full" bg="whiteAlpha.100" top="-180px" right="-100px" /><Text color="brand.100" fontSize="sm" fontWeight={800} letterSpacing=".12em" textTransform="uppercase">Ringkasan eksekutif · 23 Agustus 2026</Text><Heading mt={3} maxW="2xl" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-.03em">Tahun pertama membangun fondasi usaha desa.</Heading><Text mt={4} color="whiteAlpha.800" maxW="2xl" lineHeight={1.8}>Kinerja LANCAR JAYA tercatat transparan dari laporan internal periode {F.period}.</Text><SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={3} mt={8}><Kpi label="Dana awal" value={F.openingCapital} tone="brand.700" /><Kpi label="Total pendapatan" value={F.income} tone="brand.700" /><Kpi label="Total beban diakui" value={F.expense} tone="orange.600" /><Kpi label="Rugi konsolidasi" value={F.loss} tone="red.600" /></SimpleGrid><Flex mt={5} bg="whiteAlpha.100" rounded="xl" p={4} align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} gap={2}><Text color="whiteAlpha.700" fontSize="sm">Saldo Bank Jatim per 23 Agu 2026</Text><Text fontWeight={800}>{money(F.bankBalance)}</Text><Text color="whiteAlpha.500" mx={{ base: 0, md: 2 }}>·</Text><Text color="whiteAlpha.700" fontSize="sm">Total belanja via bank</Text><Text fontWeight={800}>{money(F.bankSpending)}</Text></Flex></Box></Reveal>

      <Reveal><SectionHeading eyebrow="Laba rugi" title="Hasil usaha konsolidasi" subtitle="Pendapatan Rp7.100.000 belum menutup beban pembentukan usaha sebesar Rp53.062.223." /><SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={8}><Box bg="brand.50" rounded="2xl" p={6}><Text fontSize="sm" color="ink.600">Pendapatan</Text><Text mt={2} fontSize="2xl" fontWeight={800} color="brand.700">{money(F.income)}</Text></Box><Box bg="orange.50" rounded="2xl" p={6}><Text fontSize="sm" color="ink.600">Beban</Text><Text mt={2} fontSize="2xl" fontWeight={800} color="orange.600">{money(F.expense)}</Text></Box><Box bg="red.50" rounded="2xl" p={6}><Text fontSize="sm" color="ink.600">Rugi bersih</Text><Text mt={2} fontSize="2xl" fontWeight={800} color="red.600">{money(F.loss)}</Text></Box></SimpleGrid><SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={5}>{F.units.map((unit) => <Box key={unit.name} border="1px solid" borderColor="ink.100" rounded="2xl" p={6}><Heading size="sm">{unit.name}</Heading><Flex justify="space-between" mt={5} gap={4} wrap="wrap"><Box><Text fontSize="xs" color="ink.500">Pendapatan</Text><Text fontWeight={700}>{money(unit.income)}</Text></Box><Box><Text fontSize="xs" color="ink.500">Beban</Text><Text fontWeight={700}>{money(unit.expense)}</Text></Box><Box><Text fontSize="xs" color="ink.500">Hasil</Text><Text fontWeight={800} color="red.600">{money(Math.abs(unit.result))} rugi</Text></Box></Flex></Box>)}</SimpleGrid></Reveal>

      <Reveal><SectionHeading eyebrow="Tren 13 bulan" title="Pendapatan dan beban bulanan" subtitle="Pendapatan mulai tercatat pada Februari 2026, lalu menguat pada panen utama Mei 2026." /><Box mt={8} overflowX="auto" pb={2}><Flex minW={{ base: "680px", md: "full" }} align="flex-end" gap={{ base: 3, md: 5 }} h="260px" borderBottom="1px solid" borderColor="ink.200" px={2}>{F.monthly.map((item) => <Flex key={item.label} direction="column" align="center" justify="flex-end" flex="1" h="full" gap={2}><Flex align="flex-end" gap={1} h="210px"><Box title={money(item.income)} bg="brand.500" w={{ base: 3, md: 5 }} h={`${Math.max(item.income / maxExpense * 190, item.income ? 5 : 0)}px`} rounded="sm" /><Box title={money(item.expense)} bg="orange.300" w={{ base: 3, md: 5 }} h={`${Math.max(item.expense / maxExpense * 190, 4)}px`} rounded="sm" /></Flex><Text fontSize="xs" color="ink.600" whiteSpace="nowrap" transform="rotate(-38deg)" transformOrigin="top center">{item.label}</Text></Flex>)}</Flex></Box><Flex mt={5} gap={5} fontSize="sm"><Flex align="center" gap={2}><Box w={3} h={3} rounded="sm" bg="brand.500" />Pendapatan</Flex><Flex align="center" gap={2}><Box w={3} h={3} rounded="sm" bg="orange.300" />Beban</Flex></Flex></Reveal>

      <Reveal><SectionHeading eyebrow="Komposisi beban" title="Ke mana biaya terserap" subtitle="Tujuh kelompok beban membentuk total beban diakui Rp53.062.223." /><Stack mt={8} spacing={5}>{F.expenseGroups.map((group) => <Box key={group.name}><Flex justify="space-between" gap={3} fontSize="sm" mb={2}><Text fontWeight={700}>{group.name}</Text><Text color="ink.600" whiteSpace="nowrap">{group.percent}% · {money(group.amount)}</Text></Flex><Box h="2" bg="ink.100" rounded="full"><Box h="full" w={`${group.percent}%`} bg="brand.500" rounded="full" /></Box></Box>)}</Stack></Reveal>

      <Reveal><Accordion allowToggle rounded="2xl" overflow="hidden" border="1px solid" borderColor="ink.100"><AccordionItem border="none"><AccordionButton bg="sand.50" py={5}><Box flex="1" textAlign="left"><Text color="brand.600" fontSize="xs" fontWeight={800} letterSpacing=".1em" textTransform="uppercase">Rincian biaya</Text><Heading size="md" mt={1}>24 item beban, urut terbesar</Heading></Box><AccordionIcon /></AccordionButton><AccordionPanel p={0} overflowX="auto"><Table minW="600px" size="sm"><Thead bg="ink.50"><Tr><Th>No.</Th><Th>Nama beban</Th><Th isNumeric>Nilai</Th></Tr></Thead><Tbody>{F.expenseItems.map((item, index) => <Tr key={item.name}><Td color="ink.500">{index + 1}</Td><Td fontWeight={600}>{item.name}</Td><Td isNumeric fontWeight={700}>{money(item.amount)}</Td></Tr>)}</Tbody></Table></AccordionPanel></AccordionItem></Accordion></Reveal>

      <Reveal><SimpleGrid columns={{ base: 1, md: 2 }} gap={8}><Box><SectionHeading eyebrow="Posisi keuangan" title="Aset per 23 Agustus 2026" subtitle={`Total aset ${money(F.assets)} · kewajiban ${money(F.liabilities)}.`} /><Stack mt={8} spacing={3}>{F.assetsList.map((asset) => <Flex key={asset.name} justify="space-between" gap={4} p={4} bg="sand.50" rounded="xl"><Text fontSize="sm" fontWeight={600}>{asset.name}</Text><Text fontSize="sm" fontWeight={800} whiteSpace="nowrap">{money(asset.amount)}</Text></Flex>)}</Stack></Box><Box bg="brand.50" rounded="3xl" p={{ base: 6, md: 8 }}><Text color="brand.700" fontSize="sm" fontWeight={800} letterSpacing=".1em" textTransform="uppercase">Register kambing</Text><Heading size="lg" mt={3}>Aset biologis yang tersisa</Heading><Text mt={3} color="ink.600" lineHeight={1.7}>Kambing masih dalam masa pembesaran dan belum menghasilkan pendapatan.</Text><SimpleGrid columns={3} gap={3} mt={8}>{[["Dibeli", F.goats.purchased], ["Mati", F.goats.dead], ["Tersisa", F.goats.remaining]].map(([label, value]) => <Box key={label as string} bg="white" rounded="xl" p={4}><Text fontSize="xs" color="ink.500">{label}</Text><Text fontSize="2xl" fontWeight={800} mt={1}>{value}</Text><Text fontSize="xs" color="ink.500">ekor</Text></Box>)}</SimpleGrid><Flex mt={5} justify="space-between" borderTop="1px solid" borderColor="brand.100" pt={4}><Text fontSize="sm">Nilai aset biologis</Text><Text fontWeight={800}>{money(F.goats.netValue)}</Text></Flex></Box></SimpleGrid></Reveal>

      <Reveal><Box bg="sand.50" rounded="2xl" p={{ base: 5, md: 8 }}><SectionHeading eyebrow="Konteks laporan" title="Investasi awal, bukan kebocoran operasional murni" subtitle="Rugi didominasi biaya pembentukan usaha tahun pertama: pemeliharaan dan kematian kambing menyerap sekitar setengah beban. Pendapatan mulai masuk dari padi siklus 1 pada Februari 2026 dan panen utama pada Mei 2026. Unit peternakan belum menjual kambing karena masih dalam masa pembesaran." /><Flex mt={6} align="center" gap={3} wrap="wrap"><Text fontSize="sm" color="ink.600">Metodologi: ringkasan ini disusun dari laporan keuangan internal BUM Desa pada periode pelaporan.</Text><Flex as="a" href="/laporan-bumdesa/DOKUMENTASI_LAPORAN_KEUANGAN_BUMDESA_LANCAR_JAYA_AGU2025_AGU2026.pdf" align="center" gap={2} color="brand.700" fontWeight={800} fontSize="sm"><FiDownload /> Unduh dokumentasi</Flex></Flex></Box></Reveal>

      <Reveal><Box bg="ink.50" rounded={{ base: "2xl", md: "3xl" }} p={{ base: 5, md: 10 }}><SectionHeading eyebrow="Pengurus" title="Manajemen BUM Desa" subtitle="Susunan pengelola BUM Desa LANCAR JAYA." /><Box mt={8} overflowX="auto" rounded="xl" bg="white"><Table minW="720px"><Thead bg="brand.50"><Tr><Th>Nama</Th><Th>Jabatan</Th><Th>Pendidikan</Th><Th>Pekerjaan</Th><Th>Telepon</Th></Tr></Thead><Tbody>{BUMDesa.management.map((member) => <Tr key={member.name}><Td fontWeight={700}>{member.name}</Td><Td><Badge colorScheme="green">{member.role}</Badge></Td><Td>{member.education}</Td><Td>{member.occupation}</Td><Td><Flex as="a" href={`tel:${member.phone}`} align="center" gap={2} color="brand.600"><FiPhone size={14} />{member.phone}</Flex></Td></Tr>)}</Tbody></Table></Box></Box></Reveal>
      <Text fontSize="sm" color="ink.500" borderTop="1px solid" borderColor="ink.100" pt={6}>Data bersumber dari laporan keuangan internal BUM Desa per 23 Agustus 2026. Laporan manajemen internal, belum diaudit.</Text>
    </Stack></Container></Box><Box bg="brand.700" color="white" py={{ base: 10, md: 14 }}><Container maxW="7xl"><Flex align="center" gap={4}><FiBriefcase size={24} /><Text fontSize={{ base: "lg", md: "xl" }} fontWeight={700}>BUM Desa LANCAR JAYA · Desa Curah Dringu</Text></Flex></Container></Box>
  </Layout>;
};
