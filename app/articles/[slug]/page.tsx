import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
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

      <Link
        href="/articles"
        className="inline-block text-sm font-medium text-blue-600 underline underline-offset-2"
      >
        Back to Articles
      </Link>
    </main>
  );
}
