import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";

export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

        <div className="flex h-[650px]">

          <Sidebar />

          <div className="flex flex-1 flex-col">

            <Topbar />

            <div className="flex flex-1 items-center justify-center text-zinc-600">
              Dashboard Content
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}