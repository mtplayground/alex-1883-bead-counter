import type { CSSProperties } from "react";

type CelebrationProps = {
  celebrationKey: number;
};

const burstPieces = [
  { color: "#ef4444", x: "-34vw", y: "-18vh", delay: "0ms" },
  { color: "#f97316", x: "-22vw", y: "-30vh", delay: "45ms" },
  { color: "#facc15", x: "-10vw", y: "-24vh", delay: "80ms" },
  { color: "#22c55e", x: "4vw", y: "-32vh", delay: "30ms" },
  { color: "#14b8a6", x: "18vw", y: "-22vh", delay: "95ms" },
  { color: "#3b82f6", x: "30vw", y: "-34vh", delay: "55ms" },
  { color: "#6366f1", x: "36vw", y: "-10vh", delay: "120ms" },
  { color: "#ec4899", x: "-38vw", y: "-4vh", delay: "105ms" },
  { color: "#f43f5e", x: "-16vw", y: "10vh", delay: "70ms" },
  { color: "#a855f7", x: "22vw", y: "8vh", delay: "130ms" },
];

export function Celebration({ celebrationKey }: CelebrationProps) {
  if (celebrationKey === 0) {
    return null;
  }

  return (
    <div
      key={celebrationKey}
      className="celebration-burst pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-[38%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5rem] border-white bg-yellow-300 shadow-[0_1rem_0_rgba(15,23,42,0.10)]" />
      {burstPieces.map((piece, index) => (
        <span
          key={`${piece.color}-${index}`}
          className="celebration-piece absolute left-1/2 top-[38%] h-8 w-8 rounded-full border-4 border-white"
          style={
            {
              "--piece-x": piece.x,
              "--piece-y": piece.y,
              "--piece-delay": piece.delay,
              backgroundColor: piece.color,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
