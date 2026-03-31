import { Star, Users } from "lucide-react";
import { InstructorProfile } from "@/lib/marketplace-data";

interface InstructorCardProps {
  instructor: InstructorProfile;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  const initials = instructor.name
    .split(" ")
    .map((chunk) => chunk[0]?.toUpperCase())
    .join("")
    .slice(0, 2);

  return (
    <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 transition duration-300 hover:border-[var(--accent)]/70 hover:shadow-[0_16px_32px_rgba(59,130,246,0.14)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[#22C55E] font-display text-sm font-semibold text-white">
          {initials}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
            {instructor.name}
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">{instructor.title}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-[var(--text-secondary)]">{instructor.tagline}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] px-2.5 py-1">
          <Star className="h-3.5 w-3.5 fill-current text-[#FACC15]" />
          {instructor.rating}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] px-2.5 py-1">
          <Users className="h-3.5 w-3.5" />
          {instructor.students.toLocaleString("uz-UZ")} talaba
        </span>
        <span className="rounded-full border border-[var(--border-color)] px-2.5 py-1">
          {instructor.courses} kurs
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {instructor.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[var(--bg-deep)] px-3 py-1 text-xs text-[var(--text-secondary)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-deep)] p-3.5">
        {instructor.projects.map((project) => (
          <div key={project.title}>
            <p className="text-sm font-medium text-[var(--text-primary)]">{project.title}</p>
            <p className="text-xs text-[var(--text-secondary)]">{project.outcome}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
