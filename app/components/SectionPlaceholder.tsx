interface SectionPlaceholderProps {
  title: string;
  description: string;
}

export default function SectionPlaceholder({
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 text-slate-600 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 dark:shadow-none">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
        {title} bo'limi
      </h1>
      <p className="mt-3 max-w-xl text-sm">{description}</p>
    </section>
  );
}
