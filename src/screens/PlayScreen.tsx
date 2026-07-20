import { NumberPanel } from "../components/NumberPanel";
import { BeadTray } from "../components/BeadTray";

export function PlayScreen() {
  return (
    <main className="min-h-dvh overflow-hidden bg-amber-50 text-slate-900">
      <section
        className="mx-auto grid min-h-dvh w-full max-w-7xl grid-rows-[minmax(15rem,42vh)_1fr] px-5 py-5 sm:px-8 lg:px-10"
        aria-label="Bead counter play space"
      >
        <NumberPanel value={0} />
        <BeadTray />
      </section>
    </main>
  );
}
