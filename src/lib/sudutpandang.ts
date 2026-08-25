import { createWpNewsSource } from "./wordpress";

export const getSudutPandangNews = createWpNewsSource({
  apiUrl: "https://sudutpandang.id/wp-json/wp/v2/posts",
  sourceName: "Sudut Pandang",
  // Kata "Bahak" menangkap liputan Pantai Bahak; filter relevansi di pabrik
  // membuang artikel tak terkait.
  keywords: ["Curahdringu", "Curah Dringu", "Bahak"],
});
