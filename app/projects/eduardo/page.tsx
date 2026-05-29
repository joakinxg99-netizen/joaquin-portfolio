import Link from "next/link";

export default function EduardoProjectPage() {
  return (
    <main className="min-h-dvh bg-[#0B0B0C] px-5 py-20 text-stone-100 antialiased sm:px-6">
      <section className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/[0.018] p-6 shadow-2xl shadow-black/25 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-400">
          Project route prepared
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          Eduardo Leal
        </h1>
        <p className="mt-5 leading-8 text-stone-300">
          This case study route is ready for a future premium project page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97]"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}
