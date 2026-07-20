import { useRef, useState } from "react";
import { Bead } from "./Bead";
import type { PlayTheme } from "../theme";
import type { Bead as BeadModel } from "../types";

const slotIndexes = Array.from({ length: 10 }, (_, index) => index);
const nextBeadColor = "#ef4444";
const dragThreshold = 8;

type BeadTrayProps = {
  beads: BeadModel[];
  canAddBead: boolean;
  onAddBead: () => void;
  theme: PlayTheme;
};

type DragState = {
  startX: number;
  startY: number;
  x: number;
  y: number;
  hasMoved: boolean;
};

export function BeadTray({
  beads,
  canAddBead,
  onAddBead,
  theme,
}: BeadTrayProps) {
  const trayRef = useRef<HTMLDivElement>(null);
  const [dragState, setDragState] = useState<DragState | null>(null);

  function addIfPossible() {
    if (canAddBead) {
      onAddBead();
    }
  }

  function handleTrayPointerUp() {
    addIfPossible();
  }

  function handleSourcePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canAddBead) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({
      startX: event.clientX,
      startY: event.clientY,
      x: event.clientX,
      y: event.clientY,
      hasMoved: false,
    });
  }

  function handleSourcePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    setDragState((currentDrag) => {
      if (!currentDrag) {
        return null;
      }

      const distance = Math.hypot(
        event.clientX - currentDrag.startX,
        event.clientY - currentDrag.startY,
      );

      return {
        ...currentDrag,
        x: event.clientX,
        y: event.clientY,
        hasMoved: currentDrag.hasMoved || distance > dragThreshold,
      };
    });
  }

  function handleSourcePointerUp(event: React.PointerEvent<HTMLButtonElement>) {
    const currentDrag = dragState;
    setDragState(null);

    if (!currentDrag) {
      return;
    }

    if (!currentDrag.hasMoved || isPointInsideTray(event.clientX, event.clientY)) {
      addIfPossible();
    }
  }

  function handleSourcePointerCancel() {
    setDragState(null);
  }

  function isPointInsideTray(x: number, y: number) {
    const trayRect = trayRef.current?.getBoundingClientRect();

    if (!trayRect) {
      return false;
    }

    return (
      x >= trayRect.left &&
      x <= trayRect.right &&
      y >= trayRect.top &&
      y <= trayRect.bottom
    );
  }

  return (
    <div className="flex min-h-0 items-center justify-center gap-4">
      <div
        ref={trayRef}
        onPointerUp={handleTrayPointerUp}
        className="relative flex h-full max-h-[24rem] min-h-[16rem] w-full touch-manipulation items-center justify-center overflow-hidden rounded-[2rem] border-[0.45rem] border-white px-4 shadow-[0_22px_0_rgba(15,23,42,0.08),0_26px_48px_rgba(15,23,42,0.18)] sm:px-8"
        style={{ backgroundColor: theme.tray }}
        aria-label={`Bead rod and tray with ${beads.length} beads`}
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
          {slotIndexes.map((slot) => {
            const bead = beads.find((placedBead) => placedBead.slot === slot);

            return (
              <div
                key={slot}
                className="flex aspect-square min-h-14 items-center justify-center rounded-full border-[0.28rem] border-dashed border-white/70 bg-white/25 p-1 sm:min-h-20"
                aria-hidden={!bead}
              >
                {bead ? (
                  <Bead
                    color={bead.color}
                    label={`Bead ${slot + 1} on the rod`}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="relative flex min-h-28 min-w-28 touch-none select-none items-center justify-center rounded-[2rem] border-[0.45rem] border-white bg-white/75 p-4 shadow-[0_16px_0_rgba(15,23,42,0.08),0_18px_32px_rgba(15,23,42,0.18)] outline-none transition-transform active:scale-95 focus-visible:ring-8 focus-visible:ring-white/80 sm:min-h-36 sm:min-w-36"
        aria-label={canAddBead ? "Add a bead" : "The rod is full"}
        disabled={!canAddBead}
        onPointerCancel={handleSourcePointerCancel}
        onPointerDown={handleSourcePointerDown}
        onPointerMove={handleSourcePointerMove}
        onPointerUp={handleSourcePointerUp}
      >
        <Bead color={nextBeadColor} />
      </button>

      {dragState ? (
        <div
          className="pointer-events-none fixed z-50 h-24 w-24 -translate-x-1/2 -translate-y-1/2 opacity-90 sm:h-28 sm:w-28"
          style={{ left: dragState.x, top: dragState.y }}
          aria-hidden="true"
        >
          <Bead color={nextBeadColor} />
        </div>
      ) : null}
    </div>
  );
}
