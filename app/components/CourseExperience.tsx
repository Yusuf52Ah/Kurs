"use client";

import { useMemo, useState } from "react";
import CourseHeader from "./CourseHeader";
import CoursePlayer from "./CoursePlayer";
import LessonAccordion from "./LessonAccordion";
import type { Course, Lesson } from "@/lib/course-data";
import { getCourseSnapshot } from "@/lib/course-data";

interface CourseExperienceProps {
  initialCourse: Course;
}

const cloneCourse = (course: Course): Course => ({
  ...course,
  modules: course.modules.map((module) => ({
    ...module,
    lessons: module.lessons.map((lesson) => ({ ...lesson })),
  })),
});

const flattenLessons = (course: Course): Lesson[] =>
  course.modules.flatMap((module) => module.lessons);

const setCurrentLesson = (lessons: Lesson[], lessonId: string) => {
  lessons.forEach((lesson) => {
    lesson.isCurrent = lesson.id === lessonId;
  });
};

export default function CourseExperience({ initialCourse }: CourseExperienceProps) {
  const [course, setCourse] = useState<Course>(() => cloneCourse(initialCourse));

  const snapshot = useMemo(() => getCourseSnapshot(course), [course]);

  const updateCourse = (updater: (draft: Course) => void) => {
    setCourse((previous) => {
      const next = cloneCourse(previous);
      updater(next);
      return next;
    });
  };

  const handleSelectLesson = (lessonId: string) => {
    updateCourse((draft) => {
      const lessons = flattenLessons(draft);
      setCurrentLesson(lessons, lessonId);
    });
  };

  const handleNextLesson = () => {
    updateCourse((draft) => {
      const lessons = flattenLessons(draft);
      const currentIndex = lessons.findIndex((lesson) => lesson.isCurrent);
      if (currentIndex < 0) return;
      const nextLesson = lessons
        .slice(currentIndex + 1)
        .find((lesson) => !lesson.isLocked);
      if (!nextLesson) return;
      setCurrentLesson(lessons, nextLesson.id);
    });
  };

  const handleCompleteLesson = () => {
    updateCourse((draft) => {
      const lessons = flattenLessons(draft);
      const currentIndex = lessons.findIndex((lesson) => lesson.isCurrent);
      if (currentIndex < 0) return;
      const currentLesson = lessons[currentIndex];
      currentLesson.isCompleted = true;

      const nextLesson = lessons[currentIndex + 1];
      if (nextLesson) {
        nextLesson.isLocked = false;
      }

      const nextAvailable = lessons
        .slice(currentIndex + 1)
        .find((lesson) => !lesson.isLocked);
      if (nextAvailable) {
        setCurrentLesson(lessons, nextAvailable.id);
      }
    });
  };

  return (
    <>
      <CourseHeader
        title={course.title}
        subtitle={course.subtitle}
        currentLessonTitle={snapshot.currentLesson.title}
        progressPercent={snapshot.progressPercent}
        nextLessonTitle={snapshot.nextLesson?.title}
        onNextLesson={handleNextLesson}
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <CoursePlayer
          lesson={snapshot.currentLesson}
          module={snapshot.currentModule}
          onCompleteLesson={handleCompleteLesson}
        />
        <LessonAccordion
          modules={course.modules}
          activeLessonId={snapshot.currentLesson.id}
          onSelectLesson={handleSelectLesson}
        />
      </div>
    </>
  );
}
