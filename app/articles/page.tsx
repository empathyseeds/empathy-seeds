"use client";

import Link from "next/link";
import { articles } from "./data";

export default function Articles() {
  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Articles & Insights
        </h1>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => {
          const preview = `${article.content.substring(0, 150)}...`;

          return (
            <article
              key={article.slug}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition duration-300"
            >
              <h2 className="font-semibold text-gray-900 text-lg leading-snug">
                {article.title}
              </h2>

              <div className="mt-4 text-gray-700 text-sm leading-relaxed">
                {preview.split("\n").map((line, index) => (
                  <span
                    key={`${article.slug}-preview-${index}`}
                    className="block mb-2"
                  >
                    {line}
                  </span>
                ))}
              </div>

              <Link
                href={`/articles/${article.slug}`}
                className="mt-3 inline-block text-sm font-medium text-gray-600 underline underline-offset-2"
              >
                Open Article
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
