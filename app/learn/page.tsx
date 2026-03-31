import CourseExperience from "../components/CourseExperience";
import PlatformShell from "../components/PlatformShell";
import { DUMMY_DATA } from "@/lib/course-data";

export default function LearnPage() {
  return (
    <PlatformShell>
      <CourseExperience initialCourse={DUMMY_DATA} />
    </PlatformShell>
  );
}
