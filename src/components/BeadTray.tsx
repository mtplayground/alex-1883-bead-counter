import type { PlayTheme } from "../theme";

const slotIndexes = Array.from({ length: 10 }, (_, index) => index);
const beadColors = [
  "#ef4444",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#f43f5e",
];

type BeadTrayProps = {
  theme: PlayTheme;
};

export function BeadTray({ theme }: BeadTrayProps) {
  return (
    <div className="flex min-h-0 items-center justify-center">
      <div
        className="relative flex h-full max-h-[24rem] min-h-[16rem] w-full touch-manipulation items-center justify-center overflow-hidden rounded-[2rem] border-[0.45rem] border-white px-4 shadow-[0_22px_0_rgba(15,23,42,0.08),0_26px_48px_rgba(15,23,42,0.18)] sm:px-8"
        style={{ backgroundColor: theme.tray }}
        aria-label="Bead rod and tray"
      >
        <div
          className="absolute left-[8%] right-[8%] top-1/2 h-9 -translate-y-1/2 rounded-full shadow-inner sm:h-12"
          style={{ backgroundColor: theme.rod }}
        />
        <div
          className="absolute bottom-[14%] left-[7%] right-[7%] h-9 rounded-full shadow-inner sm:h-11"
          style={{ backgroundColor: theme.rail }}
        />

        <div className="relative z-10 grid w-full max-w-5xl grid-cols-5 gap-3 sm:grid-cols-10 sm:gap-4">
          {slotIndexes.map((slot) => (
            <div
              key={slot}
              className="bead-preview aspect-square min-h-14 rounded-full border-[0.42rem] border-white shadow-[inset_-0.45rem_-0.55rem_0_rgba(15,23,42,0.16),inset_0.35rem_0.35rem_0_rgba(255,255,255,0.48),0_0.55rem_0_rgba(15,23,42,0.11)] sm:min-h-20"
              style={{ backgroundColor: beadColors[slot] }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
