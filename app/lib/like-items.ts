import { articles } from "../articles/data";

export const storySlugs = [
  "the-ocean-within",
  "the-awakening-of-compassion",
  "over-pampering-is-the-velvet-glove-on-the-iron-hand-of-control",
] as const;

const validIds = new Set([
  ...articles.map((article) => `article:${article.slug}`),
  ...storySlugs.map((slug) => `story:${slug}`),
]);

export function isValidLikeItemId(value: string) {
  return validIds.has(value);
}
