import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center">

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          AI Cost Intelligence
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-bold tracking-tight">
          Know exactly which AI customers make you money.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Track AI costs by customer, feature and agent before your margins disappear.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90">
            Join Waitlist
          </button>

          <button className="rounded-lg border border-white/15 px-6 py-3 font-medium hover:bg-white/5">
            See Demo
          </button>
        </div>

      </section>

      <DashboardPreview />

    </main>
  );
}