import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-deep)] py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--text-primary)]">
            Target Courses Marketplace
          </p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            O&apos;zbekiston bozori uchun maqsadga yo&apos;naltirilgan onlayn kurs platformasi.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-[var(--text-secondary)]">
          <Link href="/courses" className="transition-colors hover:text-[var(--accent)]">
            Kurslar
          </Link>
          <Link href="/instructors" className="transition-colors hover:text-[var(--accent)]">
            Mentorlar
          </Link>
          <Link href="/register" className="transition-colors hover:text-[var(--accent)]">
            Boshlash
          </Link>
        </div>
      </Container>
    </footer>
  );
}
