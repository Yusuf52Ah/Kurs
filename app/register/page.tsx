import AuthShell from "../components/marketplace/AuthShell";

export default function RegisterPage() {
  return (
    <AuthShell
      title={"Ro'yxatdan o'tish"}
      subtitle={"Maqsadingizni tanlang va birinchi kursga yoziling."}
      submitLabel="Profil yaratish"
      alternateText="Allaqachon akkauntingiz bormi?"
      alternateLabel="Kirish"
      alternateHref="/login"
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
          To&apos;liq ism
        </span>
        <input
          type="text"
          placeholder="Ism Familiya"
          className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
          Email
        </span>
        <input
          type="email"
          placeholder="siz@email.com"
          className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
          Asosiy yo&apos;nalish
        </span>
        <select className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]">
          <option>Dasturlash</option>
          <option>Dizayn</option>
          <option>Marketing</option>
          <option>Biznes</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
          Parol
        </span>
        <input
          type="password"
          placeholder="Kamida 8 ta belgi"
          className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>
    </AuthShell>
  );
}
