import { createWpNewsSource } from "./wordpress";

export const getPojokNasionalNews = createWpNewsSource({
  apiUrl: "https://pojoknasional.co.id/wp-json/wp/v2/posts",
  sourceName: "Pojok Nasional",
});
