"use client";

import { ChevronDown, CheckCircle2, Lock, PlayCircle } from "lucide-react";
import type { Module, Lesson } from "@/lib/course-data";

interface LessonAccordionProps {
  modules: Module[];
  activeLessonId?: string;
  onSelectLesson?: (lessonId: string) => void;
}

const getLessonBadge = (lesson: Lesson) => {
  if (lesson.isLocked) {
    return {
      label: "Locked",
      tone: "border-slate-200 text-slate-400 dark:border-slate-700 dark:text-slate-400",
    };
  }
  if (lesson.isCompleted) {
    return {
      label: "Bajarildi",
      tone:
        "border-emerald-200 text-emerald-600 dark:border-emerald-400/40 dark:text-emerald-400",
    };
  }
  if (lesson.isCurrent) {
    return {
      label: "Hozir",
      tone:
        "border-blue-200 text-blue-600 dark:border-blue-400/40 dark:text-blue-400",
    };
  }
  return {
    label: "Navbatda",
    tone: "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-300",
  };
};

export default function LessonAccordion({
  modules,
  activeLessonId,
  onSelectLesson,
}: LessonAccordionProps) {
  return (
    <section className="space-y-4">
      {modules.map((module, index) => (
        <details
          key={module.id}
          className="group rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Modul {index + 1}
              </p>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {module.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {module.description}
              </p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180" />
          </summary>

          <div className="border-t border-slate-200 dark:border-slate-800">
            <ul className="divide-y divide-slate-200 dark:divide-slate-800">
              {module.lessons.map((lesson) => {
                const badge = getLessonBadge(lesson);
                const isActive = lesson.id === activeLessonId;
                const isClickable = Boolean(onSelectLesson) && !lesson.isLocked;
                const content = (
                  <>
                    <div className="flex items-start gap-3">
                      {lesson.isLocked ? (
                        <Lock className="mt-0.5 h-4 w-4 text-slate-400" />
                      ) : lesson.isCompleted ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                      ) : (
                        <PlayCircle className="mt-0.5 h-4 w-4 text-[#0066FF]" />
                      )}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {lesson.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Davomiyligi: {lesson.duration}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${badge.tone}`}
                    >
                      {badge.label}
                    </span>
                  </>
                );

                return (
                  <li
                    key={lesson.id}
                    className={`text-sm ${lesson.isLocked ? "opacity-60" : ""}`}
                  >
                    {isClickable ? (
                      <button
                        type="button"
                        onClick={() => onSelectLesson?.(lesson.id)}
                        className={`flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition ${
                          isActive
                            ? "bg-blue-50/70 dark:bg-blue-500/10"
                            : "hover:bg-slate-50 dark:hover:bg-slate-900"
                        }`}
                      >
                        {content}
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3 px-5 py-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      ))}
    </section>
  );
}
