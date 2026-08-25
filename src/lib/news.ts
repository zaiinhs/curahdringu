import { NEWS, type NewsItem } from "@/data/site";
import { getCurahdringuNews } from "./radar-bromo";
import { getPojokNasionalNews } from "./pojoknasional";
import { getRadarPatroliNews } from "./radarpatroli";
import { getSudutPandangNews } from "./sudutpandang";

/** Cakupan arsip kabar desa yang ditampilkan (inklusif). */
export const NEWS_MIN_YEAR = 2021;

const isWithinCoverage = (item: NewsItem) =>
  !item.iso || Number(item.iso.slice(0, 4)) >= NEWS_MIN_YEAR;

const byNewestFirst = (first: NewsItem, second: NewsItem) =>
  (Date.parse(second.iso ?? "") || 0) - (Date.parse(first.iso ?? "") || 0);

/**
 * Artikel statis dalam cakupan tahun; dipakai sebagai fallback ketika seluruh
 * sumber API gagal.
 */
export const getFallbackNews = (): NewsItem[] =>
  NEWS.filter(isWithinCoverage).sort(byNewestFirst);

/**
 * Mengambil kabar Desa Curahdringu dari seluruh sumber media secara paralel.
 * Gagalnya satu sumber tidak mempengaruhi sumber lain; hasil digabung,
 * disaring sesuai cakupan tahun, lalu diurutkan dari yang terbaru.
 */
export const getVillageNews = async (): Promise<NewsItem[]> => {
  const sources = await Promise.allSettled([
    getCurahdringuNews(),
    getPojokNasionalNews(),
    getRadarPatroliNews(),
    getSudutPandangNews(),
  ]);

  const news: NewsItem[] = [];

  sources.forEach((source) => {
    if (source.status === "fulfilled") {
      news.push(...source.value);
    } else {
      console.error("Gagal mengambil berita:", source.reason);
    }
  });

  const coverage = news.filter(isWithinCoverage);

  if (!coverage.length) {
    throw new Error("Tidak ada sumber berita yang berhasil diambil");
  }

  return [...coverage].sort(byNewestFirst);
};
