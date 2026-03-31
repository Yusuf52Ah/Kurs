export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  isLocked: boolean;
  isCompleted: boolean;
  isCurrent?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  modules: Module[];
}

export const DUMMY_DATA: Course = {
  id: "targeting-course",
  title: "Targeting Kursi",
  subtitle: "Facebook Ads + Instagram Targeting",
  description:
    "Reklama kampaniyalarini to'g'ri sozlash, auditoriyani topish va natijalarni kuchaytirish uchun amaliy kurs.",
  level: "Intermediate",
  modules: [
    {
      id: "module-1",
      title: "Facebook Ads Asoslari",
      description: "Business Manager, maqsad va auditoriya logikasi.",
      lessons: [
        {
          id: "lesson-1",
          title: "Business Manager strukturasi",
          duration: "11:24",
          summary:
            "Business Manager hisobini tuzish, sahifa va reklama hisoblarini ulashning qisqa yo'riqnomasi.",
          isLocked: false,
          isCompleted: true,
        },
        {
          id: "lesson-2",
          title: "Reklama maqsadlarini tanlash",
          duration: "14:08",
          summary:
            "Kampaniya maqsadlari, funnel bosqichlari va KPI'larni moslashtirish.",
          isLocked: false,
          isCompleted: true,
        },
        {
          id: "lesson-3",
          title: "Auditoriya segmentlari",
          duration: "16:02",
          summary:
            "Core, Custom va Lookalike auditoriyalarni yaratish va tekshirish.",
          isLocked: false,
          isCompleted: false,
          isCurrent: true,
        },
      ],
    },
    {
      id: "module-2",
      title: "Instagram Targeting",
      description: "Instagram reklamalari va vizual strategiya.",
      lessons: [
        {
          id: "lesson-4",
          title: "Placement strategiyasi",
          duration: "12:33",
          summary:
            "Feed, Stories va Reels joylashuvlari uchun test metodikasi.",
          isLocked: false,
          isCompleted: false,
        },
        {
          id: "lesson-5",
          title: "Creative paketlarni yig'ish",
          duration: "18:55",
          summary:
            "Vizual birlik, CTA va reklamani tez A/B test qilish yo'llari.",
          isLocked: false,
          isCompleted: false,
        },
        {
          id: "lesson-6",
          title: "Retargeting uchun Story funnel",
          duration: "10:41",
          summary:
            "Instagram Stories orqali qiziqishni qayta uyg'otish strategiyasi.",
          isLocked: true,
          isCompleted: false,
        },
      ],
    },
    {
      id: "module-3",
      title: "Pixel Sozlash va Events",
      description: "Tracking, konversiya va optimizatsiya.",
      lessons: [
        {
          id: "lesson-7",
          title: "Meta Pixel o'rnatish",
          duration: "15:12",
          summary:
            "Pixel sozlamalari, domenni tekshirish va data quality.",
          isLocked: true,
          isCompleted: false,
        },
        {
          id: "lesson-8",
          title: "Event mapping va prioritetlar",
          duration: "13:27",
          summary:
            "Eventlarni to'g'ri xaritalash, prioritizatsiya va signal tizimi.",
          isLocked: true,
          isCompleted: false,
        },
        {
          id: "lesson-9",
          title: "Kampaniyani optimizatsiya qilish",
          duration: "19:05",
          summary:
            "CTR, CPA va ROAS ko'rsatkichlarini balanslash bo'yicha reja.",
          isLocked: true,
          isCompleted: false,
        },
      ],
    },
  ],
};

export interface CourseSnapshot {
  totalLessons: number;
  completedLessons: number;
  progressPercent: number;
  currentLesson: Lesson;
  currentModule: Module;
  nextLesson: Lesson | null;
}

export const getCourseSnapshot = (course: Course): CourseSnapshot => {
  const modules = course.modules;
  const lessons = modules.flatMap((module) => module.lessons);
  if (modules.length === 0 || lessons.length === 0) {
    throw new Error("Course data is empty.");
  }
  const completedLessons = lessons.filter((lesson) => lesson.isCompleted).length;
  const totalLessons = lessons.length;
  const progressPercent =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);

  let currentLesson = lessons[0]!;
  let currentModule = modules[0]!;
  for (const courseModule of modules) {
    const activeLesson = courseModule.lessons.find((lesson) => lesson.isCurrent);
    if (activeLesson) {
      currentLesson = activeLesson;
      currentModule = courseModule;
      break;
    }
  }

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === currentLesson.id
  );
  const nextLesson =
    currentIndex >= 0
      ? lessons.slice(currentIndex + 1).find((lesson) => !lesson.isLocked) ?? null
      : null;

  return {
    totalLessons,
    completedLessons,
    progressPercent,
    currentLesson,
    currentModule,
    nextLesson,
  };
};
