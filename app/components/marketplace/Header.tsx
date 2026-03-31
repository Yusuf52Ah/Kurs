import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/courses", label: "Kurslar" },
  { href: "/instructors", label: "Mentorlar" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[rgba(248,251,255,0.9)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <span className="font-display text-base font-semibold tracking-tight text-[var(--text-primary)]">
            Target Courses
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="rounded-xl border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
          >
            Kirish
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Ro&apos;yxatdan o&apos;tish
          </Link>
        </div>
      </Container>

      <div className="border-t border-[var(--border-color)]/70 py-2 md:hidden">
        <Container className="flex items-center justify-between gap-3">
          <nav className="flex items-center gap-2 overflow-x-auto pb-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-lg border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/login"
            className="whitespace-nowrap rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Kirish
          </Link>
        </Container>
      </div>
    </header>
  );
}
