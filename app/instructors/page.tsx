import Container from "../components/marketplace/Container";
import Footer from "../components/marketplace/Footer";
import Header from "../components/marketplace/Header";
import InstructorCard from "../components/marketplace/InstructorCard";
import { instructorProfiles } from "@/lib/marketplace-data";

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Header />

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-deep)] py-10">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Top Instructor Network
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-[var(--text-primary)]">
            Portfolio uslubidagi mentor profillari
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[var(--text-secondary)] sm:text-base">
            Har bir mentorning real loyiha natijalari, mutaxassisligi va talaba
            feedbacklari asosida sizga mos o&apos;qituvchini tanlang.
          </p>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container className="grid gap-4 lg:grid-cols-2">
          {instructorProfiles.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </Container>
      </section>

      <Footer />
    </main>
  );
}
