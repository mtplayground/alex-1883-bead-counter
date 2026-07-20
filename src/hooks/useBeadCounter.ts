import { useCallback, useState } from "react";
import type { Bead } from "../types";

export const MAX_BEADS = 10;

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

export function useBeadCounter() {
  const [beads, setBeads] = useState<Bead[]>([]);

  const addBead = useCallback(() => {
    setBeads((currentBeads) => {
      if (currentBeads.length >= MAX_BEADS) {
        return currentBeads;
      }

      const slot = currentBeads.length;
      return [
        ...currentBeads,
        {
          id: `bead-${Date.now()}-${slot}`,
          color: beadColors[slot],
          slot,
        },
      ];
    });
  }, []);

  return {
    addBead,
    beads,
    canAddBead: beads.length < MAX_BEADS,
    maxBeads: MAX_BEADS,
  };
}
