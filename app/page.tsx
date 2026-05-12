import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import { getContent } from "@/src/constants/content";

export const metadata: Metadata = {
  title: "ප්‍රධාන පිටුව",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const content = getContent(lang);
  const languageQuery = lang === "en" ? "?lang=en" : "";

  return (
    <div className="space-y-16 pb-8">
      <Hero
        eyebrow={content.home.welcome}
        title={content.home.title}
        subtitle={content.home.subtitle}
        intro={content.home.intro}
        primaryAction={content.home.primaryAction}
        primaryHref={`/contact${languageQuery}`}
        secondaryAction={content.home.secondaryAction}
        secondaryHref={`/services${languageQuery}`}
        stats={[...content.home.stats]}
        highlights={[...content.home.highlights]}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] animate-fade-up">
          <article className="rounded-[2rem] border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm dark:bg-[var(--surface-strong)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a] dark:text-[var(--accent)]">
              {content.home.featureTitle}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.home.features.map((feature, index) => (
                <div key={feature.title} className={`rounded-3xl bg-[#fbf7ea] p-5 ring-1 ring-[#f5c84c]/20 animate-fade-up`} style={{ animationDelay: `${index * 90}ms` }}>
                  <h2 className="text-xl font-semibold text-[#10213a] dark:text-slate-50">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-[#1e3a8a]/10 bg-[#1e3a8a] p-8 text-white shadow-sm animate-float-soft dark:bg-[#0f1f4a]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c84c]">
              {content.home.benefitsTitle}
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-blue-50">
              {content.home.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5c84c] text-[10px] font-bold text-[#1e3a8a]">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#f5c84c]/30 bg-white/90 p-8 shadow-sm dark:bg-[var(--surface-strong)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
            {content.home.noticeTitle}
          </p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#10213a]">
                {content.home.membershipFormLabel}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {content.home.notice}
              </p>
            </div>
            <a
              href={content.home.membershipFormHref}
              className="inline-flex items-center justify-center rounded-full border border-[#f5c84c] bg-[#fff4c8] px-6 py-3 text-sm font-semibold text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe08a]"
            >
              {content.home.membershipFormLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:items-start dark:bg-[var(--surface-strong)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
              {content.home.noticeTitle}
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {content.home.notice}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.home.stats.map((stat, index) => (
                <div key={stat.label} className="rounded-2xl bg-[#fbf7ea] p-5 ring-1 ring-[#f5c84c]/20 animate-fade-up" style={{ animationDelay: `${index * 110}ms` }}>
                  <p className="text-2xl font-semibold text-[#1e3a8a]">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-[#1e3a8a] p-6 text-white shadow-sm dark:bg-[#0f1f4a]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c84c]">{content.home.servicesTitle}</p>
            <div className="mt-5 space-y-4">
              {content.services.list.slice(0, 2).map((service) => (
                <div key={service.id} className="rounded-2xl bg-white/10 p-4">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-50/90">{service.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/services${languageQuery}`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-5 py-3 text-sm font-semibold text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe08a]"
            >
              {content.nav.services}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] animate-fade-up">
          <article className="rounded-[2rem] border border-[#1e3a8a]/10 bg-white/90 p-8 shadow-sm dark:bg-[var(--surface-strong)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">සාමාජික අත්දැකීම්</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.home.testimonials.map((testimonial, index) => (
                <figure key={testimonial.name} className="rounded-3xl bg-[#fbf7ea] p-5 ring-1 ring-[#f5c84c]/20 animate-fade-up" style={{ animationDelay: `${index * 120}ms` }}>
                  <blockquote className="text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-[#1e3a8a]">{testimonial.name}</figcaption>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </figure>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-[#f5c84c]/30 bg-[#fff8e6] p-8 shadow-sm dark:bg-[#1a2440] dark:text-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a] dark:text-[#f5c84c]">{content.home.benefitsTitle}</p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
              {content.home.whyChooseUs.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-[10px] font-bold text-[#f5c84c]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}