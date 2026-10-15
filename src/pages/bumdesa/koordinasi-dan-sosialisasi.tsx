import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { useEffect, useState, type FormEvent } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { HeadComponent } from "@/components/Head";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { BUMDESA_PIN, BUMDESA_SESSION_KEY } from "@/lib/bumdesa-access";

type ReportProps = { css: string; content: string };

const REPORT_URL = "/bumdesa/koordinasi-dan-sosialisasi";

const ReportPage = ({ css, content }: ReportProps) => {
  const [checking, setChecking] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(BUMDESA_SESSION_KEY) === "1");
    setChecking(false);
  }, []);

  useEffect(() => {
    if (lockedUntil === null) return;
    const timer = setInterval(() => {
      if (Date.now() >= lockedUntil) {
        setLockedUntil(null);
        setAttempts(0);
        setError("");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [lockedUntil]);

  const isLocked = lockedUntil !== null && Date.now() < lockedUntil;
  const remainingSec = lockedUntil ? Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000)) : 0;

  const handleUnlock = (event: FormEvent) => {
    event.preventDefault();
    if (isLocked) return;
    if (pin === BUMDESA_PIN) {
      sessionStorage.setItem(BUMDESA_SESSION_KEY, "1");
      setUnlocked(true);
      setPin("");
      setError("");
      return;
    }

    const next = attempts + 1;
    setAttempts(next);
    setError(`PIN salah — percobaan ${next}/5`);
    setPin("");
    if (next >= 5) {
      setLockedUntil(Date.now() + 30_000);
      setError("Terlalu banyak percobaan. Terkunci 30 detik.");
    }
  };

  if (checking) {
    return <Layout title="Ringkasan Keuangan BUMDesa" canonicalPath={REPORT_URL} noIndex>
      <Box py={24} textAlign="center">Memeriksa akses...</Box>
    </Layout>;
  }

  if (!unlocked) {
    return <Layout title="Ringkasan Keuangan BUMDesa — Akses Terbatas" canonicalPath={REPORT_URL} noIndex>
      <PageHero current="Ringkasan Keuangan" title="Akses Terbatas" subtitle="Gunakan PIN yang sama seperti halaman BUMDesa untuk membuka ringkasan keuangan." />
      <Box bg="white" py={{ base: 10, md: 16 }}>
        <Container maxW="lg">
          <Stack as="form" onSubmit={handleUnlock} spacing={5} p={{ base: 6, md: 8 }} border="1px solid" borderColor="ink.100" rounded="3xl" boxShadow="0 16px 40px rgba(10,68,61,0.08)">
            <Box color="brand.600"><FiLock size={32} /></Box>
            <Heading size="md">Masukkan PIN BUMDesa</Heading>
            <Text color="ink.500" fontSize="sm">PIN 6 digit ini juga membuka dashboard BUMDesa selama sesi browser yang sama.</Text>
            <InputGroup size="lg">
              <Input
                aria-label="PIN BUMDesa"
                type={showPin ? "text" : "password"}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                placeholder="••••••"
                value={pin}
                onChange={(event) => {
                  setPin(event.target.value.replace(/\D/g, "").slice(0, 6));
                  if (error) setError("");
                }}
                bg="ink.50"
                rounded="xl"
                letterSpacing="0.3em"
                textAlign="center"
                fontWeight={700}
                focusBorderColor="brand.500"
              />
              <InputRightElement h="full" pr={2}>
                <Button size="sm" variant="ghost" onClick={() => setShowPin((value) => !value)} aria-label={showPin ? "Sembunyikan PIN" : "Lihat PIN"}>
                  {showPin ? <FiEyeOff /> : <FiEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {error && <Text role="alert" color="red.500" fontSize="sm">{error} {isLocked ? `(${remainingSec}s)` : ""}</Text>}
            <Button type="submit" size="lg" colorScheme="brand" isDisabled={pin.length !== 6 || isLocked}>
              {isLocked ? `Terkunci ${remainingSec}s` : "Buka Laporan"}
            </Button>
            <Button as={Link} href="/bumdesa" variant="ghost" size="sm">Kembali ke BUMDesa</Button>
          </Stack>
        </Container>
      </Box>
    </Layout>;
  }

  return <>
    <HeadComponent title="Ringkasan Keuangan BUMDesa Lancar Jaya" description="Pendanaan, sisa kas, serta hasil usaha kambing dan pertanian BUMDesa Lancar Jaya per 30 September 2026." canonicalPath={REPORT_URL} noIndex />
    <Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <style>{`
        .report-navigation { display: flex; justify-content: space-between; gap: 16px; width: min(210mm, 100%); margin: 0 auto 16px; color: #153d34; font-size: 12px; font-weight: 700; }
        .report-navigation a:hover, .report-navigation button:hover { text-decoration: underline; }
        .report-navigation button { border: 0; padding: 0; background: none; color: inherit; cursor: pointer; font: inherit; }
        @media print { .report-navigation { display: none; } }
        @media (max-width: 700px) { .report-navigation { padding: 16px 22px; margin-bottom: 0; } }
      `}</style>
    </Head>
    <nav className="report-navigation" aria-label="Navigasi laporan">
      <Link href="/bumdesa">← Kembali ke halaman BUMDesa</Link>
      <button type="button" onClick={() => { sessionStorage.removeItem(BUMDESA_SESSION_KEY); setUnlocked(false); }}>Kunci halaman</button>
    </nav>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>;
};

export const getStaticProps: GetStaticProps<ReportProps> = async () => {
  const html = await readFile(
    join(process.cwd(), "docs/laporan-bumdesa/RINGKASAN_KEUANGAN_BUMDESA_AGU2025_SEP2026.html"),
    "utf8",
  );
  const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1];
  const content = html.match(/<body>([\s\S]*?)<\/body>/)?.[1];

  if (!css || !content) throw new Error("Format HTML ringkasan keuangan tidak lengkap.");

  return { props: { css, content } };
};

export default ReportPage;
