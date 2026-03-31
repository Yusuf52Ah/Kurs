export type CourseCategory = "Dasturlash" | "Dizayn" | "Marketing" | "Biznes";
export type CourseLevel = "Boshlang'ich" | "O'rta" | "Professional";

export interface MarketplaceCourse {
  id: string;
  title: string;
  category: CourseCategory;
  level: CourseLevel;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  lessons: number;
  instructor: string;
  description: string;
  goals: string[];
}

export interface InstructorProject {
  title: string;
  outcome: string;
}

export interface InstructorProfile {
  id: string;
  name: string;
  title: string;
  tagline: string;
  rating: number;
  students: number;
  courses: number;
  skills: string[];
  projects: InstructorProject[];
}

export interface PriceFilter {
  id: "all" | "budget" | "mid" | "premium";
  label: string;
  min: number;
  max: number | null;
}

export const courseCategories: Array<"Barchasi" | CourseCategory> = [
  "Barchasi",
  "Dasturlash",
  "Dizayn",
  "Marketing",
  "Biznes",
];

export const courseLevels: Array<"Barchasi" | CourseLevel> = [
  "Barchasi",
  "Boshlang'ich",
  "O'rta",
  "Professional",
];

export const priceFilters: PriceFilter[] = [
  { id: "all", label: "Barcha narxlar", min: 0, max: null },
  { id: "budget", label: "Byudjet: 0 - 300 000 so'm", min: 0, max: 300_000 },
  {
    id: "mid",
    label: "O'rta: 300 001 - 700 000 so'm",
    min: 300_001,
    max: 700_000,
  },
  { id: "premium", label: "Premium: 700 001+ so'm", min: 700_001, max: null },
];

export const courseCatalog: MarketplaceCourse[] = [
  {
    id: "frontend-nextjs",
    title: "Frontend Pro: Next.js & TypeScript",
    category: "Dasturlash",
    level: "O'rta",
    price: 649_000,
    rating: 4.9,
    reviews: 186,
    duration: "8 hafta",
    lessons: 42,
    instructor: "Aziza Karimova",
    description:
      "Real loyihalar orqali modern web ilovalar yaratish, App Router va deploy jarayonlari.",
    goals: ["Portfolio", "Juniordan Middlega o'tish", "Freelance start"],
  },
  {
    id: "uiux-figma",
    title: "UI/UX Mastery: Figma va Product Thinking",
    category: "Dizayn",
    level: "Boshlang'ich",
    price: 429_000,
    rating: 4.8,
    reviews: 141,
    duration: "6 hafta",
    lessons: 30,
    instructor: "Jasur Nurmatov",
    description:
      "User flow, wireframe, prototiplash va dizayn tizimi bilan startup darajasidagi interfeyslar.",
    goals: ["Portfolio", "Freelance client topish", "Product dizayn asoslari"],
  },
  {
    id: "meta-ads-performance",
    title: "Performance Marketing: Meta Ads 2026",
    category: "Marketing",
    level: "Professional",
    price: 799_000,
    rating: 4.9,
    reviews: 208,
    duration: "7 hafta",
    lessons: 36,
    instructor: "Dilshod Murodov",
    description:
      "ROAS oshirish, conversion funnel va analitika bilan reklama kampaniyalarini masshtablash.",
    goals: ["Sotuvni oshirish", "Agency workflow", "Real case study"],
  },
  {
    id: "python-data-analytics",
    title: "Python Data Analytics for Business",
    category: "Dasturlash",
    level: "Boshlang'ich",
    price: 289_000,
    rating: 4.7,
    reviews: 98,
    duration: "5 hafta",
    lessons: 24,
    instructor: "Kamola Raxmonova",
    description:
      "Excel'dan Python'ga o'tish, dashboard va biznes qarorlar uchun data bilan ishlash.",
    goals: ["Data bilan ishlash", "Hisobot avtomatizatsiyasi", "KPI kuzatuvi"],
  },
  {
    id: "branding-social-design",
    title: "Social Media Design Sprint",
    category: "Dizayn",
    level: "O'rta",
    price: 349_000,
    rating: 4.8,
    reviews: 122,
    duration: "4 hafta",
    lessons: 20,
    instructor: "Jasur Nurmatov",
    description:
      "Brendga mos vizual kontent, Canva/Figma workflow va tezkor kontent ishlab chiqish.",
    goals: ["Instagram kontent", "Brend uslub", "Tez dizayn pipeline"],
  },
  {
    id: "sales-funnel-ops",
    title: "Sales Funnel va CRM Automation",
    category: "Biznes",
    level: "Professional",
    price: 940_000,
    rating: 4.9,
    reviews: 77,
    duration: "9 hafta",
    lessons: 44,
    instructor: "Sardor Xasanov",
    description:
      "Lidlarni tizimli boshqarish, CRM integratsiya va savdo jarayonlarini raqamlashtirish.",
    goals: ["B2B savdo", "CRM setup", "Konversiya optimizatsiyasi"],
  },
  {
    id: "growth-instagram",
    title: "Instagram Growth Strategiyasi",
    category: "Marketing",
    level: "Boshlang'ich",
    price: 259_000,
    rating: 4.6,
    reviews: 134,
    duration: "3 hafta",
    lessons: 18,
    instructor: "Dilshod Murodov",
    description:
      "Kontent reja, audience tahlili va reklamasiz organik o'sish uchun amaliy usullar.",
    goals: ["Personal brand", "Organik reach", "Kontent planning"],
  },
  {
    id: "startup-finance-basics",
    title: "Startup Finance Basics",
    category: "Biznes",
    level: "O'rta",
    price: 519_000,
    rating: 4.8,
    reviews: 65,
    duration: "6 hafta",
    lessons: 28,
    instructor: "Sardor Xasanov",
    description:
      "Unit economics, cashflow va investorlar uchun moliyaviy model tayyorlashning amaliy yo'li.",
    goals: ["Moliyaviy model", "Investorga tayyorgarlik", "Byudjet nazorati"],
  },
];

export const instructorProfiles: InstructorProfile[] = [
  {
    id: "aziza-karimova",
    name: "Aziza Karimova",
    title: "Senior Frontend Engineer",
    tagline: "SaaS mahsulotlari uchun tezkor va toza web arxitektura mutaxassisi",
    rating: 4.9,
    students: 1240,
    courses: 5,
    skills: ["Next.js", "TypeScript", "System Design", "Code Review"],
    projects: [
      {
        title: "EduTrack LMS",
        outcome: "Yangi checkout oqimi bilan konversiya +27%",
      },
      {
        title: "Startup Hiring Dashboard",
        outcome: "Ishlash tezligi 1.8x oshirildi",
      },
    ],
  },
  {
    id: "jasur-nurmatov",
    name: "Jasur Nurmatov",
    title: "Product Designer",
    tagline: "Uzbek startup'lar uchun UX tizimi va conversion dizayn bo'yicha mentor",
    rating: 4.8,
    students: 980,
    courses: 4,
    skills: ["Figma", "UX Research", "Design Systems", "Mobile UI"],
    projects: [
      {
        title: "Fintech Mobile App",
        outcome: "Onboarding drop-off 31% dan 14% ga tushdi",
      },
      {
        title: "Marketplace Redesign",
        outcome: "Checkout completion +19%",
      },
    ],
  },
  {
    id: "dilshod-murodov",
    name: "Dilshod Murodov",
    title: "Performance Marketer",
    tagline: "Meta Ads orqali e-commerce va service bizneslar uchun growth strateg",
    rating: 4.9,
    students: 1570,
    courses: 6,
    skills: ["Meta Ads", "Funnel Strategy", "GA4", "Creative Testing"],
    projects: [
      {
        title: "Fashion Brand Scale",
        outcome: "3 oyda ROAS 2.1 dan 4.3 ga yetdi",
      },
      {
        title: "Lead Gen Kampaniya",
        outcome: "CPA 38% ga kamaydi",
      },
    ],
  },
  {
    id: "sardor-xasanov",
    name: "Sardor Xasanov",
    title: "Business Systems Consultant",
    tagline: "CRM, savdo jarayoni va startup moliyasi bo'yicha amaliy trener",
    rating: 4.8,
    students: 620,
    courses: 3,
    skills: ["CRM", "Sales Ops", "Startup Finance", "Leadership"],
    projects: [
      {
        title: "B2B Sales Engine",
        outcome: "Deal yopish vaqti o'rtacha 24% tezlashdi",
      },
      {
        title: "SMB Finance Model",
        outcome: "Cashflow forecasting aniqligi sezilarli yaxshilandi",
      },
    ],
  },
];

export const formatCurrency = (amount: number) => {
  return `${new Intl.NumberFormat("uz-UZ").format(amount)} so'm`;
};
