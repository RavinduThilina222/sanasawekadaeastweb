import type { Metadata } from "next";

import { getContent } from "@/src/constants/content";

export const metadata: Metadata = {
  title: "අප ගැන",
};

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const content = getContent(lang);
  const languageQuery = lang === "en" ? "?lang=en" : "";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-up">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
          {content.about.title}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#10213a] sm:text-5xl dark:text-slate-50">
          {content.about.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {content.about.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm dark:bg-[var(--surface-strong)]">
          <h2 className="text-2xl font-semibold text-[#10213a] dark:text-slate-50">
            {content.about.missionTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {content.about.mission}
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-[#10213a] dark:text-slate-50">
            {content.about.visionTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {content.about.vision}
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-[#10213a] dark:text-slate-50">
            {content.about.journeyTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {content.about.journey}
          </p>
        </article>

        <aside className="rounded-3xl border border-[#f5c84c]/25 bg-[#1e3a8a] p-8 text-white shadow-sm dark:bg-[#0f1f4a]">
          <h2 className="text-2xl font-semibold">{content.about.valuesTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {content.about.values.map((value, index) => (
              <span
                key={value}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {value}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-blue-100">
            {languageQuery ? "" : ""}
            {lang === "en"
              ? "We continuously update our services based on member feedback and community needs."
              : "සාමාජිකයන්ගේ අදහස් සහ ප්‍රජා අවශ්‍යතා මත සේවාවන් යාවත්කාලීන කරමින් අපි ඉදිරියට යනවා."}
          </p>
        </aside>
      </div>
    </section>
  );
}
