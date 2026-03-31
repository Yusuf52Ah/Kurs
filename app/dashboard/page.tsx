import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import PlatformShell from "../components/PlatformShell";
import { DUMMY_DATA, getCourseSnapshot } from "@/lib/course-data";

interface StatCard {
  label: string;
  icon: LucideIcon;
  getValue: (
    totalLessons: number,
    completedLessons: number,
    progressPercent: number,
    nextLessonTitle?: string | null
  ) => string;
}

const statCards: StatCard[] = [
  {
    label: "Jami darslar",
    icon: BookOpenCheck,
    getValue: (totalLessons) => totalLessons.toString(),
  },
  {
    label: "Bajarilgan darslar",
    icon: TrendingUp,
    getValue: (_totalLessons, completedLessons) => completedLessons.toString(),
  },
  {
    label: "Kurs progressi",
    icon: Target,
    getValue: (_totalLessons, _completedLessons, progressPercent) =>
      `${progressPercent}%`,
  },
  {
    label: "Keyingi dars",
    icon: Clock3,
    getValue: (_totalLessons, _completedLessons, _progressPercent, nextLesson) =>
      nextLesson ?? "Hozircha yo'q",
  },
];

export default function DashboardPage() {
  const snapshot = getCourseSnapshot(DUMMY_DATA);
  const moduleStats = DUMMY_DATA.modules.map((module) => {
    const completed = module.lessons.filter((lesson) => lesson.isCompleted).length;
    return {
      id: module.id,
      title: module.title,
      completed,
      total: module.lessons.length,
    };
  });

  return (
    <PlatformShell>
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Dashboard
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              Assalomu alaykum, qaytganingizdan xursandmiz
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Kurs holati va keyingi qadamlarni shu yerda nazorat qiling.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#0b5be0]"
          >
            Darsni davom ettirish
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ label, icon: Icon, getValue }) => (
          <div
            key={label}
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {label}
              </p>
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0066FF]/10 text-[#0066FF]">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              {getValue(
                snapshot.totalLessons,
                snapshot.completedLessons,
                snapshot.progressPercent,
                snapshot.nextLesson?.title
              )}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Modul bo'yicha progress
          </h2>
          <div className="mt-4 space-y-4">
            {moduleStats.map((module) => {
              const percent =
                module.total === 0
                  ? 0
                  : Math.round((module.completed / module.total) * 100);
              return (
                <div key={module.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {module.title}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {module.completed}/{module.total}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full bg-[#0066FF]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Tezkor eslatmalar
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              Hozirgi dars:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {snapshot.currentLesson.title}
              </span>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              Keyingi qadam:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {snapshot.nextLesson?.title ?? "Modullarni yakunlash"}
              </span>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              So'nggi modul:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {DUMMY_DATA.modules[DUMMY_DATA.modules.length - 1]?.title}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </PlatformShell>
  );
}
