"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Home,
  LayoutGrid,
  MessageSquare,
  Settings,
  Target,
} from "lucide-react";

const navItems = [
  { label: "Bosh sahifa", icon: Home, href: "/" },
  { label: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
  { label: "Kurslarim", icon: BookOpen, href: "/learn" },
  { label: "Auditoriyalar", icon: Target, href: "/audiences" },
  { label: "Analitika", icon: BarChart3, href: "/analytics" },
  { label: "Xabarlar", icon: MessageSquare, href: "/messages" },
  { label: "Sozlamalar", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col gap-8 border-r border-slate-200 bg-white/90 p-6 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0066FF]/10 text-[#0066FF]">
          <Target className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">Sammi</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Minimalistik kurs platformasi
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, href }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname?.startsWith(href));
          return (
            <Link
              key={label}
              href={href}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
        <p className="font-semibold text-slate-900 dark:text-white">Sammi</p>
        <p className="mt-1">
          Darslar, topshiriqlar va feedback shu yerda.
        </p>
      </div>
    </aside>
  );
}
