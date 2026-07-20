import { useMemo } from "react";
import { NumberPanel } from "../components/NumberPanel";
import { BeadTray } from "../components/BeadTray";
import { getSessionTheme } from "../theme";

export function PlayScreen() {
  const theme = useMemo(() => getSessionTheme(), []);

  return (
    <main
      className="min-h-dvh overflow-hidden text-slate-950"
      style={{ background: theme.background }}
    >
      <section
        className="mx-auto grid min-h-dvh w-full max-w-7xl grid-rows-[minmax(15rem,42vh)_1fr] gap-5 px-5 py-5 sm:px-8 lg:px-10"
        aria-label="Bead counter play space"
      >
        <NumberPanel value={0} theme={theme} />
        <BeadTray theme={theme} />
      </section>
    </main>
  );
}
