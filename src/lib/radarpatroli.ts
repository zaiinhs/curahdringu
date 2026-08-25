import { createWpNewsSource } from "./wordpress";

export const getRadarPatroliNews = createWpNewsSource({
  apiUrl: "https://radarpatroli.com/wp-json/wp/v2/posts",
  sourceName: "Radar Patroli",
  // Kata "Bahak" menangkap liputan Pantai Bahak yang tak selalu menyebut
  // nama desa; hasilnya disaring ulang oleh filter relevansi.
  keywords: ["Curahdringu", "Curah Dringu", "Bahak"],
});
