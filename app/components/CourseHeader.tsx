"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface CourseHeaderProps {
  title: string;
  subtitle: string;
  currentLessonTitle: string;
  progressPercent: number;
  nextLessonTitle?: string | null;
  onNextLesson?: () => void;
}

export default function CourseHeader({
  title,
  subtitle,
  currentLessonTitle,
  progressPercent,
  nextLessonTitle,
  onNextLesson,
}: CourseHeaderProps) {
  const hasNextLesson = Boolean(nextLessonTitle);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Sparkles className="h-4 w-4 text-[#0066FF]" />
            Targeting kursi
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {subtitle} - Hozirgi dars: {currentLessonTitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {nextLessonTitle ? `Keyingi: ${nextLessonTitle}` : "Kurs yakunlanmoqda"}
          </div>
          <button
            type="button"
            onClick={onNextLesson}
            disabled={!hasNextLesson}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition ${
              hasNextLesson
                ? "bg-[#0066FF] text-white shadow-blue-500/20 hover:bg-[#0b5be0]"
                : "cursor-not-allowed bg-slate-200 text-slate-500 shadow-none dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            {hasNextLesson ? "Navbatdagi darsga o'tish" : "Kurs yakunlandi"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <ProgressBar value={progressPercent} label="Kurs bo'yicha progress" />
      </div>
    </section>
  );
}
