"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import CourseCard from "./CourseCard";
import {
  courseCatalog,
  courseCategories,
  courseLevels,
  priceFilters,
} from "@/lib/marketplace-data";

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<(typeof courseCategories)[number]>("Barchasi");
  const [level, setLevel] = useState<(typeof courseLevels)[number]>("Barchasi");
  const [priceFilter, setPriceFilter] = useState<(typeof priceFilters)[number]["id"]>("all");

  const filteredCourses = useMemo(() => {
    const selectedPrice = priceFilters.find((filter) => filter.id === priceFilter);

    return courseCatalog.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.goals.some((goal) =>
          goal.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "Barchasi" || course.category === category;
      const matchesLevel = level === "Barchasi" || course.level === level;
      const matchesPrice = selectedPrice
        ? course.price >= selectedPrice.min &&
          (selectedPrice.max === null || course.price <= selectedPrice.max)
        : true;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [searchTerm, category, level, priceFilter]);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <label className="md:col-span-2">
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Qidiruv
            </span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={"Kurs nomi, mentor yoki maqsad bo'yicha izlang..."}
                className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] pl-10 pr-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
              />
            </div>
          </label>

          <label>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Kategoriya
            </span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as (typeof courseCategories)[number])
              }
              className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
            >
              {courseCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Daraja
            </span>
            <select
              value={level}
              onChange={(event) =>
                setLevel(event.target.value as (typeof courseLevels)[number])
              }
              className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
            >
              {courseLevels.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Narx oralig&apos;i
            </span>
            <select
              value={priceFilter}
              onChange={(event) =>
                setPriceFilter(event.target.value as (typeof priceFilters)[number]["id"])
              }
              className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
            >
              {priceFilters.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">
          Topildi:{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {filteredCourses.length}
          </span>{" "}
          ta kurs
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center">
          <p className="font-display text-lg font-semibold text-[var(--text-primary)]">
            Mos kurs topilmadi
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Filterlarni yengillashtirib qayta urinib ko&apos;ring.
          </p>
        </div>
      )}
    </section>
  );
}
