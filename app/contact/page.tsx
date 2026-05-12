import type { Metadata } from "next";

import { getContent } from "@/src/constants/content";

export const metadata: Metadata = {
  title: "අපව සම්බන්ධ කරගන්න",
};

export default async function ContactPage({
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
          {content.contact.title}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#10213a] sm:text-5xl dark:text-slate-50">
          {content.contact.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {content.contact.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          {content.contact.details.map((detail, index) => (
            <article
              key={detail.label}
              className="rounded-3xl border border-[#1e3a8a]/10 bg-white/90 p-6 shadow-sm animate-fade-up dark:bg-[var(--surface-strong)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1e3a8a]">
                {detail.label}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">{detail.value}</p>
            </article>
          ))}

          <article className="rounded-3xl border border-[#f5c84c]/25 bg-[#1e3a8a] p-6 text-white shadow-sm dark:bg-[#0f1f4a]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c84c]">
              {content.contact.ctaTitle}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blue-50">
              {content.contact.cta}
            </p>
            <a
              href={content.contact.membershipFormHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe08a]"
            >
              {content.contact.membershipFormLabel}
            </a>
          </article>
        </div>

        <aside className="overflow-hidden rounded-[2rem] border border-[#1e3a8a]/10 bg-white/90 shadow-sm">
          <div className="border-b border-[#1e3a8a]/10 bg-[#fbf7ea] px-6 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
              {content.contact.mapTitle}
            </p>
          </div>
          <div className="grid min-h-[420px] place-items-center bg-gradient-to-br from-[#e8eefb] via-white to-[#fff3cc] px-6 py-8 text-center">
            <div className="max-w-md">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a8a] text-2xl text-[#f5c84c]">
                ⌂
              </div>
              <h2 className="text-2xl font-semibold text-[#10213a] dark:text-slate-50">Google Maps iframe placeholder</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {content.contact.mapPlaceholder}
              </p>
              <div className="mt-6 rounded-3xl border border-dashed border-[#1e3a8a]/30 bg-white/80 p-4 text-sm text-slate-500">
                Embed your branch location here for directions, branch visibility, and mobile-friendly access.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
