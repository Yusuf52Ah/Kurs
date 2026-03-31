"use client";

interface ProgressBarProps {
  value: number;
  label?: string;
}

export default function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      ) : null}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-[#0066FF] transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
