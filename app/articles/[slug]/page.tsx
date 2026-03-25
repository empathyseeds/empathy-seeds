import { notFound } from "next/navigation";

const articles = [
  {
    slug: "architecture-of-our-thoughts",
    title: "The Architecture Of Our Thoughts",
    content: "This is full article content for testing"
  },
  {
    slug: "family-root",
    title: "Family: The Quiet Soil Where We First Take Root",
    content: "This is full article content for testing"
  },
  {
    slug: "holistic-development",
    title: "Holistic Development for Children: Own True Shape",
    content: "This is full article content for testing"
  },
  {
    slug: "parenting-challenges-india",
    title: "Parenting Challenges in the Indian Context",
    content: "This is full article content for testing"
  },
  {
    slug: "calm-parent-logic",
    title: "The \"Calm-Parent\" Logic",
    content: "This is full article content for testing"
  }
];

export default function ArticlePage({ params }: any) {
  const slug = params?.slug;

  // 🔥 DEBUG (remove later)
  console.log("Current slug:", slug);

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="pt-24 pb-12 px-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">
        {article.title}
      </h1>

      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {article.content}
      </p>
    </main>
  );
}