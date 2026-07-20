const slotIndexes = Array.from({ length: 10 }, (_, index) => index);

export function BeadTray() {
  return (
    <div className="flex min-h-0 items-center justify-center py-6">
      <div
        className="relative flex h-full max-h-[22rem] min-h-[14rem] w-full touch-manipulation items-center justify-center rounded-[2rem] border-4 border-white/80 bg-sky-100/80 px-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:px-8"
        aria-label="Bead rod and tray"
      >
        <div className="absolute left-[8%] right-[8%] top-1/2 h-8 -translate-y-1/2 rounded-full bg-amber-700 shadow-inner sm:h-10" />
        <div className="absolute bottom-[18%] left-[7%] right-[7%] h-8 rounded-full bg-amber-500/80 shadow-inner" />

        <div className="relative z-10 grid w-full max-w-5xl grid-cols-10 gap-2 sm:gap-4">
          {slotIndexes.map((slot) => (
            <div
              key={slot}
              className="aspect-square rounded-full border-4 border-dashed border-white/90 bg-white/40"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
