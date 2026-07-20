export type PlayTheme = {
  name: string;
  background: string;
  panel: string;
  tray: string;
  numeral: string;
  numeralShadow: string;
  rod: string;
  rail: string;
  accent: string;
};

export const playThemes: PlayTheme[] = [
  {
    name: "sunny",
    background:
      "radial-gradient(circle at 18% 16%, #ffffff 0 7rem, transparent 7.2rem), linear-gradient(135deg, #fff7ad 0%, #a7f3d0 52%, #93c5fd 100%)",
    panel: "#fffdf0",
    tray: "#dbeafe",
    numeral: "#2563eb",
    numeralShadow: "#facc15",
    rod: "#f97316",
    rail: "#facc15",
    accent: "#ef4444",
  },
  {
    name: "garden",
    background:
      "radial-gradient(circle at 82% 14%, #ffffff 0 6rem, transparent 6.2rem), linear-gradient(135deg, #bbf7d0 0%, #fde68a 50%, #fda4af 100%)",
    panel: "#f0fdf4",
    tray: "#cffafe",
    numeral: "#16a34a",
    numeralShadow: "#fb7185",
    rod: "#dc2626",
    rail: "#22c55e",
    accent: "#2563eb",
  },
  {
    name: "sky",
    background:
      "radial-gradient(circle at 24% 18%, #ffffff 0 5.5rem, transparent 5.7rem), linear-gradient(135deg, #bfdbfe 0%, #fbcfe8 48%, #fed7aa 100%)",
    panel: "#eff6ff",
    tray: "#fef3c7",
    numeral: "#dc2626",
    numeralShadow: "#38bdf8",
    rod: "#2563eb",
    rail: "#f59e0b",
    accent: "#16a34a",
  },
];

export function getSessionTheme(): PlayTheme {
  if (typeof window === "undefined") {
    return playThemes[0];
  }

  const storageKey = "alex-1883-bead-counter-theme";
  const savedTheme = readSessionTheme(storageKey);
  const existingTheme = playThemes.find((theme) => theme.name === savedTheme);

  if (existingTheme) {
    return existingTheme;
  }

  const nextTheme = playThemes[Math.floor(Math.random() * playThemes.length)];
  writeSessionTheme(storageKey, nextTheme.name);
  return nextTheme;
}

function readSessionTheme(storageKey: string): string | null {
  try {
    return window.sessionStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function writeSessionTheme(storageKey: string, themeName: string): void {
  try {
    window.sessionStorage.setItem(storageKey, themeName);
  } catch {
    // A stable in-memory choice is enough when session storage is unavailable.
  }
}
