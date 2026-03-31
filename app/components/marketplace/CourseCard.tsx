import Link from "next/link";
import { BookOpen, Clock3, Star } from "lucide-react";
import { formatCurrency, MarketplaceCourse } from "@/lib/marketplace-data";

interface CourseCardProps {
  course: MarketplaceCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/70 hover:shadow-[0_18px_36px_rgba(59,130,246,0.16)]">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="rounded-full border border-[var(--border-color)] px-3 py-1 text-[var(--text-secondary)]">
          {course.category}
        </span>
        <span className="rounded-full bg-[var(--bg-deep)] px-3 py-1 text-[var(--text-secondary)]">
          {course.level}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-[var(--text-primary)]">
        {course.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{course.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-current text-[#FACC15]" />
          {course.rating} ({course.reviews})
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" />
          {course.lessons} dars
        </span>
      </div>

      <div className="mt-5 border-t border-[var(--border-color)] pt-4">
        <p className="text-xs text-[var(--text-secondary)]">Mentor: {course.instructor}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="font-display text-xl font-semibold text-[var(--text-primary)]">
            {formatCurrency(course.price)}
          </p>
          <Link
            href="/register"
            className="rounded-xl bg-[var(--accent)] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Kursga yozilish
          </Link>
        </div>
      </div>
    </article>
  );
}
