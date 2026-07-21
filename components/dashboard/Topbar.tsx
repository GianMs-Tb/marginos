export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">

      <div>
        <h1 className="text-xl font-semibold">
          Dashboard
        </h1>

        <p className="text-sm text-zinc-500">
          Welcome back.
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900">
          Export
        </button>

        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90">
          Add Customer
        </button>

      </div>

    </header>
  );
}