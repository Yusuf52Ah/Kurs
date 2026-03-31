import AuthShell from "../components/marketplace/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      title="Kirish"
      subtitle="Profilingizga kirib kurslarni davom ettiring."
      submitLabel="Kirish"
      alternateText={"Akkauntingiz yo'qmi?"}
      alternateLabel={"Ro'yxatdan o'ting"}
      alternateHref="/register"
    >
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
          Parol
        </span>
        <input
          type="password"
          placeholder="********"
          className="h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-[var(--text-secondary)]">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--accent)]"
          />
          Eslab qolish
        </label>
        <button
          type="button"
          className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Parolni unutdingizmi?
        </button>
      </div>
    </AuthShell>
  );
}
