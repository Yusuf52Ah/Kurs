import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface PlatformShellProps {
  children: ReactNode;
}

export default function PlatformShell({ children }: PlatformShellProps) {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0F172A] dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.12),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.18),_transparent_55%)]" />
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <main className="flex flex-col gap-6 p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
