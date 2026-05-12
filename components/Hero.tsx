import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
  stats?: ReadonlyArray<{
    value: string;
    label: string;
  }>;
  highlights?: ReadonlyArray<string>;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  intro,
  primaryAction,
  primaryHref,
  secondaryAction,
  secondaryHref,
  stats = [],
  highlights = [],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-blue-950/10 bg-[linear-gradient(135deg,rgba(30,58,138,0.12),rgba(245,200,76,0.08))] animate-fade-up">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.20),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(245,200,76,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-[#f5c84c]/40 bg-[#fff6d9] px-4 py-1 text-sm font-semibold text-[#1e3a8a]">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#10213a] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            {subtitle}
          </p>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {intro}
            </p>
          ) : null}

          {highlights.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#152d6b]"
            >
              {primaryAction}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-[#f5c84c] bg-[#fff8e6] px-6 py-3 text-sm font-semibold text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#fff1bf]"
            >
              {secondaryAction}
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a]">
              තොරතුරු
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#fbf7ea] px-4 py-5 ring-1 ring-[#f5c84c]/30"
                >
                  <p className="text-2xl font-semibold text-[#1e3a8a]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#f5c84c]/30 bg-[#1e3a8a] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c84c]">
              ප්‍රජා සේවාව
            </p>
            <p className="mt-4 text-xl font-semibold leading-8">
              ප්‍රයෝජනවත් සේවාවන්, විශ්වාසනීය ක්‍රියාවලියක්, සහ සාමාජික මනසට හිතකර අත්දැකීමක්.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
