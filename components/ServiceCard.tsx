type ServiceCardProps = {
  title: string;
  desc: string;
  index?: number;
};

export default function ServiceCard({ title, desc, index }: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-[#1e3a8a]/10 bg-white/90 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg animate-fade-up dark:bg-[var(--surface-strong)]">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3cc] text-sm font-semibold text-[#1e3a8a] ring-1 ring-[#f5c84c]/40">
          0{index ?? 0}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5c84c]" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#10213a]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
    </article>
  );
}
