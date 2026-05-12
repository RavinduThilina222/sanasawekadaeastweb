import type { Metadata } from "next";

import ServiceCard from "@/components/ServiceCard";
import { getContent } from "@/src/constants/content";

export const metadata: Metadata = {
  title: "සේවා",
};

export default async function ServicesPage({
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
          {content.services.title}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#10213a] sm:text-5xl dark:text-slate-50">
          {content.services.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {content.services.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {content.services.list.map((service, index) => (
          <ServiceCard
            key={service.id}
            index={service.id}
            title={service.title}
            desc={service.desc}
            /* keep subtle stagger animation through card wrapper */
          />
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-[#1e3a8a]/10 bg-[#1e3a8a] p-8 text-white shadow-sm dark:bg-[#0f1f4a]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c84c]">
            සාමාජිකත්ව ක්‍රියාවලිය
          </p>
          <h2 className="mt-4 text-2xl font-semibold">{content.services.processTitle}</h2>
          <ol className="mt-6 space-y-3 text-sm leading-relaxed text-blue-50">
            {content.services.process.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5c84c] text-xs font-semibold text-[#1e3a8a]">
                  ✓
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-[2rem] border border-[#f5c84c]/25 bg-white/90 p-8 shadow-sm dark:bg-[var(--surface-strong)]">
          <h2 className="text-2xl font-semibold text-[#10213a] dark:text-slate-50">What We Do</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {lang === "en"
              ? "Members can rely on savings, deposits, and loan services that are designed to support everyday financial life and strengthen the local economy."
              : "සාමාජිකයන්ට දෛනික ඉතුරුම්, තැන්පතු, සහ ණය මඟින් ගැමි ආර්ථිකය ශක්තිමත් කිරීමට කඩිනම්, විශ්වාසනීය සේවාවක්."}
          </p>
          <div className="mt-6 rounded-3xl bg-[#fbf7ea] p-5 ring-1 ring-[#f5c84c]/20">
            <p className="text-sm font-semibold text-[#1e3a8a]">{content.services.membershipFormLabel}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {lang === "en"
                ? "Download the form or collect it from the office to apply for membership."
                : "පෝරමය බාගෙන හෝ කාර්යාලයෙන් ලබාගෙන සාමාජිකත්වයට අයදුම් කරන්න."}
            </p>
            <a
              href={content.services.membershipFormHref}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#152d6b]"
            >
              {content.services.membershipFormLabel}
            </a>
          </div>
        </article>
      </div>

      <div className="mt-12 rounded-[2rem] border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-2">
          {content.services.catalog.map((group, index) => (
            <article key={group.title} className="rounded-3xl bg-[#fbf7ea] p-6 ring-1 ring-[#f5c84c]/20 animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
              <h3 className="text-xl font-semibold text-[#10213a]">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{group.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
