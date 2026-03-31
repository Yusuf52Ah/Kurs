import Link from "next/link";
import { ReactNode } from "react";
import Container from "./Container";
import Header from "./Header";

interface AuthShellProps {
  title: string;
  subtitle: string;
  submitLabel: string;
  alternateText: string;
  alternateLabel: string;
  alternateHref: string;
  children: ReactNode;
}

export default function AuthShell({
  title,
  subtitle,
  submitLabel,
  alternateText,
  alternateLabel,
  alternateHref,
  children,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Header />
      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_top,#3B82F622_0,transparent_50%)]" />
        <Container>
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <aside className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-deep)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Target Courses
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--text-primary)]">
                Kasbiy o&apos;sishingizni bugun boshlang
              </h1>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Bozor talabiga mos kurslarni toping, mentor bilan ishlang va natijaga
                erishing.
              </p>
              <div className="mt-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  Premium tajriba
                </p>
                <p className="mt-2 text-sm text-[var(--text-primary)]">
                  Shaxsiylashtirilgan kurs tavsiyalari va aniq maqsadlar bo&apos;yicha
                  yo&apos;naltirish.
                </p>
              </div>
            </aside>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 sm:p-7">
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
                {title}
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{subtitle}</p>

              <form className="mt-5 space-y-4">
                {children}
                <button
                  type="button"
                  className="w-full rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  {submitLabel}
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-[var(--text-secondary)]">
                {alternateText}{" "}
                <Link
                  href={alternateHref}
                  className="font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                >
                  {alternateLabel}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
