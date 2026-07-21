export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-black p-6">

      <h2 className="text-xl font-bold">
        MarginOS
      </h2>

      <p className="mt-1 text-sm text-zinc-500">
        AI Cost Intelligence
      </p>

      <nav className="mt-10 space-y-2">

        <button className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-left transition hover:bg-zinc-800">
          Dashboard
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-zinc-400 transition hover:bg-zinc-900">
          Customers
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-zinc-400 transition hover:bg-zinc-900">
          AI Models
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-zinc-400 transition hover:bg-zinc-900">
          Usage
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-zinc-400 transition hover:bg-zinc-900">
          Billing
        </button>

      </nav>

    </aside>
  );
}