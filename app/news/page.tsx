import type { Metadata } from "next";

import { getContent } from "@/src/constants/content";

export const metadata: Metadata = {
  title: "පුවත්",
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const content = getContent(lang);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-up">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
          {content.news.title}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#10213a] sm:text-5xl dark:text-slate-50">
          {content.news.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {content.news.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {content.news.items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm animate-fade-up dark:bg-[var(--surface-strong)]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e3a8a]">
              {item.date}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#10213a] dark:text-slate-50">
              {item.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
