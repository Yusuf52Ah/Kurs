"use client";

import { CheckCircle2, Clock3, PlayCircle, Video } from "lucide-react";
import type { Lesson, Module } from "@/lib/course-data";

interface CoursePlayerProps {
  lesson: Lesson;
  module: Module;
  onCompleteLesson?: () => void;
}

const lessonHighlights = [
  "Auditoriya segmentlarini aniq belgilash",
  "Custom va Lookalike strukturasini yig'ish",
  "Reklama testini tezkor ishga tushirish",
];

export default function CoursePlayer({
  lesson,
  module,
  onCompleteLesson,
}: CoursePlayerProps) {
  const isCompleted = lesson.isCompleted;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        <Video className="h-4 w-4 text-[#0066FF]" />
        {module.title}
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/5MgBikgcWnY?rel=0"
            title="Targeting lesson preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <PlayCircle className="h-4 w-4 text-[#0066FF]" />
          {lesson.duration}
        </div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          {lesson.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {lesson.summary}
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <button
          type="button"
          onClick={onCompleteLesson}
          disabled={isCompleted}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition ${
            isCompleted
              ? "cursor-not-allowed bg-slate-200 text-slate-500 shadow-none dark:bg-slate-800 dark:text-slate-400"
              : "bg-[#0066FF] text-white shadow-blue-500/20 hover:bg-[#0b5be0]"
          }`}
        >
          <CheckCircle2 className="h-4 w-4" />
          {isCompleted ? "Dars tugallandi" : "Darsni tugatdim"}
        </button>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <Clock3 className="h-4 w-4" />
          25 daqiqalik mashq tavsiya etiladi
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <p className="font-semibold text-slate-900 dark:text-white">
          Bugungi fokus
        </p>
        <ul className="mt-2 space-y-1">
          {lessonHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
