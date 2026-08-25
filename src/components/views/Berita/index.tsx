"use client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FiChevronsDown, FiInbox } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { NewsCard } from "@/components/ui/NewsCard";
import { AnnouncementCard } from "@/components/ui/AnnouncementCard";
import { NewsFilters, type FilterSelectConfig } from "@/components/ui/NewsFilters";
import { Reveal } from "@/components/ui/Reveal";
import type { AnnouncementItem, NewsItem } from "@/data/site";
import { ANNOUNCEMENTS, IS_ANNOUNCEMENTS_MOCK } from "@/data/site";
import { usePaginatedList } from "./usePaginatedList";

const PAGE_SIZE = 9;

const includesQuery = (text: string[], query: string) => {
  const needle = query.trim().toLowerCase();
  return !needle || text.join(" ").toLowerCase().includes(needle);
};

const uniqueSorted = (values: string[]) =>
  Array.from(new Set(values)).sort((first, second) => first.localeCompare(second));

const uniqueYearsDesc = (isoes: string[]) =>
  Array.from(new Set(isoes.map((iso) => iso.slice(0, 4)))).sort().reverse();

const toSelectConfig = (
  label: string,
  allLabel: string,
  value: string,
  onChange: (value: string) => void,
  options: string[],
): FilterSelectConfig => ({
  label,
  value,
  onChange,
  options: [
    { value: "all", label: allLabel },
    ...options.map((option) => ({ value: option, label: option })),
  ],
});

interface ResultsFooterProps {
  hasMore: boolean;
  visibleCount: number;
  totalCount: number;
  onLoadMore: () => void;
}

const ResultsFooter = ({
  hasMore,
  visibleCount,
  totalCount,
  onLoadMore,
}: ResultsFooterProps) => (
  <Flex direction="column" align="center" gap={3} mt={10}>
    <Text color="ink.400" fontSize="sm">
      Menampilkan {visibleCount} dari {totalCount}
    </Text>
    {hasMore ? (
      <Button
        onClick={onLoadMore}
        colorScheme="brand"
        variant="outline"
        rightIcon={<FiChevronsDown />}
      >
        Muat Lebih Banyak
      </Button>
    ) : (
      totalCount > 0 && (
        <Text color="ink.300" fontSize="xs" fontStyle="italic">
          Semua sudah ditampilkan
        </Text>
      )
    )}
  </Flex>
);

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => (
  <Flex direction="column" align="center" gap={2} py={16}>
    <Box as="span" color="ink.300">
      <FiInbox size={40} />
    </Box>
    <Text color="ink.500">{message}</Text>
  </Flex>
);

export const BeritaView = ({ news }: { news: NewsItem[] }) => {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("all");
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");

  const [annQuery, setAnnQuery] = useState("");
  const [annCategory, setAnnCategory] = useState("all");
  const [annYear, setAnnYear] = useState("all");

  const newsSources = useMemo(
    () => uniqueSorted(news.map((item) => item.source)),
    [news],
  );
  const newsCategories = useMemo(
    () => uniqueSorted(news.map((item) => item.category)),
    [news],
  );
  const newsYears = useMemo(
    () => uniqueYearsDesc(news.map((item) => item.iso ?? "")),
    [news],
  );

  const filteredNews = useMemo(
    () =>
      news.filter(
        (item) =>
          includesQuery([item.title, item.excerpt], query) &&
          (source === "all" || item.source === source) &&
          (category === "all" || item.category === category) &&
          (year === "all" || (item.iso ?? "").startsWith(year)),
      ),
    [news, query, source, category, year],
  );

  const newsList = usePaginatedList(filteredNews);

  const annCategories = useMemo(
    () => uniqueSorted(ANNOUNCEMENTS.map((item) => item.category)),
    [],
  );
  const annYears = useMemo(
    () => uniqueYearsDesc(ANNOUNCEMENTS.map((item) => item.iso)),
    [],
  );

  const sortedAnnouncements = useMemo(
    () =>
      [...ANNOUNCEMENTS].sort(
        (first, second) => Date.parse(second.iso) - Date.parse(first.iso),
      ),
    [],
  );

  const filteredAnnouncements = useMemo(
    () =>
      sortedAnnouncements.filter(
        (item) =>
          includesQuery([item.title, item.excerpt], annQuery) &&
          (annCategory === "all" || item.category === annCategory) &&
          (annYear === "all" || item.iso.startsWith(annYear)),
      ),
    [sortedAnnouncements, annQuery, annCategory, annYear],
  );

  const announcementList = usePaginatedList(filteredAnnouncements);

  return (
    <Layout
      title="Berita & Pengumuman"
      description="Kabar terbaru, pengumuman, dan kegiatan Desa Curah Dringu — agregat media seputar Pantai Bahak, BUMDes, dan pembangunan desa sejak 2021."
      canonicalPath="/berita"
    >
      <PageHero
        current="Berita"
        title="Berita & Pengumuman Desa"
        subtitle="Ikuti perkembangan terkini, agenda, dan informasi penting dari Desa Curah Dringu."
      />
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <Tabs variant="soft-rounded" colorScheme="brand">
            <TabList gap={2} mb={{ base: 6, md: 8 }}>
              <Tab fontWeight={600}>Berita Media ({filteredNews.length})</Tab>
              <Tab fontWeight={600}>
                Pengumuman Desa ({filteredAnnouncements.length})
              </Tab>
            </TabList>

            <TabPanels>
              {/* ======== Berita media ======== */}
              <TabPanel px={0}>
                {news.length ? (
                  <>
                    <NewsFilters
                      search={query}
                      onSearchChange={setQuery}
                      selects={[
                        toSelectConfig(
                          "Sumber",
                          "Semua Sumber",
                          source,
                          setSource,
                          newsSources,
                        ),
                        toSelectConfig(
                          "Topik",
                          "Semua Topik",
                          category,
                          setCategory,
                          newsCategories,
                        ),
                        toSelectConfig(
                          "Tahun",
                          "Semua Tahun",
                          year,
                          setYear,
                          newsYears,
                        ),
                      ]}
                      resultCount={filteredNews.length}
                    />
                    {filteredNews.length ? (
                      <>
                        <SimpleGrid
                          columns={{ base: 1, sm: 2, lg: 3 }}
                          spacing={6}
                        >
                          {newsList.visible.map((item, i) => (
                            <Reveal key={item.url} delay={(i % 3) * 0.08} h="full">
                              <NewsCard item={item} />
                            </Reveal>
                          ))}
                        </SimpleGrid>
                        <div ref={newsList.sentinelRef} />
                        <ResultsFooter
                          hasMore={newsList.hasMore}
                          visibleCount={newsList.visible.length}
                          totalCount={newsList.totalCount}
                          onLoadMore={newsList.loadMore}
                        />
                      </>
                    ) : (
                      <EmptyState message="Tidak ada berita yang cocok dengan pencarian atau filter." />
                    )}
                  </>
                ) : (
                  <EmptyState message="Belum ada berita tentang Desa Curahdringu." />
                )}
              </TabPanel>

              {/* ======== Pengumuman desa ======== */}
              <TabPanel px={0}>
                {IS_ANNOUNCEMENTS_MOCK && (
                  <Alert
                    status="info"
                    rounded="xl"
                    mb={6}
                    fontSize="sm"
                    alignItems="center"
                  >
                    <AlertIcon />
                    <Box flex="1">
                      <AlertDescription>
                        Pengumuman di bawah masih berupa <strong>data contoh</strong>{" "}
                        untuk demonstrasi tampilan — bukan pengumuman resmi desa.
                      </AlertDescription>
                    </Box>
                  </Alert>
                )}
                <NewsFilters
                  search={annQuery}
                  onSearchChange={setAnnQuery}
                  selects={[
                    toSelectConfig(
                      "Kategori",
                      "Semua Kategori",
                      annCategory,
                      setAnnCategory,
                      annCategories,
                    ),
                    toSelectConfig(
                      "Tahun",
                      "Semua Tahun",
                      annYear,
                      setAnnYear,
                      annYears,
                    ),
                  ]}
                  resultCount={filteredAnnouncements.length}
                />
                {filteredAnnouncements.length ? (
                  <>
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
                      {announcementList.visible.map((item, i) => (
                        <Reveal key={item.slug} delay={(i % 3) * 0.08} h="full">
                          <AnnouncementCard item={item as AnnouncementItem} />
                        </Reveal>
                      ))}
                    </SimpleGrid>
                    <div ref={announcementList.sentinelRef} />
                    <ResultsFooter
                      hasMore={announcementList.hasMore}
                      visibleCount={announcementList.visible.length}
                      totalCount={announcementList.totalCount}
                      onLoadMore={announcementList.loadMore}
                    />
                  </>
                ) : (
                  <EmptyState message="Tidak ada pengumuman yang cocok dengan pencarian atau filter." />
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </Layout>
  );
};
