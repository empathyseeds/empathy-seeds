import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "../../lib/site";
import { articles, getArticleDescription } from "../data";

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

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  const description = getArticleDescription(article);
  const articlePath = `/articles/${article.slug}`;

  return {
    title: article.title,
    description,
    keywords: article.keywords,
    alternates: {
      canonical: articlePath,
    },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url: articlePath,
      title: article.title,
      description,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  const description = getArticleDescription(article);
  const articleUrl = `${SITE_URL}/articles/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description,
    keywords: article.keywords.join(", "),
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="pt-24 pb-12 px-6 max-w-3xl mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
