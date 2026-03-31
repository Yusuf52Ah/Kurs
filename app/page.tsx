import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Sparkles } from "lucide-react";
import Container from "./components/marketplace/Container";
import CourseCard from "./components/marketplace/CourseCard";
import Footer from "./components/marketplace/Footer";
import Header from "./components/marketplace/Header";
import InstructorCard from "./components/marketplace/InstructorCard";
import { courseCatalog, instructorProfiles } from "@/lib/marketplace-data";

export default function Home() {
  const featuredCourses = courseCatalog.slice(0, 3);
  const featuredInstructors = instructorProfiles.slice(0, 2);

  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Header />

      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_80%_10%,#3B82F644_0,transparent_45%)]" />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-deep)] px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                Uzbekistan Market
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl">
                Maqsadingizga mos onlayn kursni toping va natijaga tezroq chiqing
              </h1>
              <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] sm:text-lg">
                Dasturlash, dizayn, marketing va biznes yo&apos;nalishlarida kurslarni
                taqqoslang, mentorlarni ko&apos;ring va bir necha daqiqada o&apos;qishni
                boshlang.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Find Your Course
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/instructors"
                  className="rounded-xl border border-[var(--border-color)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
                >
                  Mentorlarni ko&apos;rish
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-3.5">
                  <p className="text-xs text-[var(--text-secondary)]">Faol kurslar</p>
                  <p className="mt-1 font-display text-xl font-semibold">120+</p>
                </div>
                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-3.5">
                  <p className="text-xs text-[var(--text-secondary)]">Mentorlar</p>
                  <p className="mt-1 font-display text-xl font-semibold">35+</p>
                </div>
                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-3.5 col-span-2 sm:col-span-1">
                  <p className="text-xs text-[var(--text-secondary)]">Talabalar</p>
                  <p className="mt-1 font-display text-xl font-semibold">8k+</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[0_24px_50px_rgba(59,130,246,0.16)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Tezkor yo&apos;naltirish
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--text-primary)]">
                2 qadamda mos kursni toping
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-deep)] p-3.5">
                  <Search className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Maqsadingizni yozing: Frontend, SMM, UI/UX
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-deep)] p-3.5">
                  <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Daraja, narx va mentor tajribasi bo&apos;yicha solishtiring
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-deep)] p-3.5">
                  <ShieldCheck className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Ishonchli to&apos;lov va tezkor ro&apos;yxatdan o&apos;tish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border-color)] bg-[var(--bg-deep)] py-12">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Featured Courses
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)]">
                Eng ko&apos;p tanlanayotgan kurslar
              </h2>
            </div>
            <Link
              href="/courses"
              className="text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              Barcha kurslarni ko&apos;rish
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Mentor Portfolio
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)]">
                Natija ko&apos;rsatgan mentorlar bilan ishlang
              </h2>
            </div>
            <Link
              href="/instructors"
              className="text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              Mentorlar sahifasi
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {featuredInstructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
