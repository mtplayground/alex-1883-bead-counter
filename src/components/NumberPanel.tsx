import type { PlayTheme } from "../theme";

type NumberPanelProps = {
  value: number;
  theme: PlayTheme;
};

export function NumberPanel({ value, theme }: NumberPanelProps) {
  return (
    <div className="flex min-h-0 items-center justify-center">
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border-[0.45rem] border-white shadow-[0_22px_0_rgba(15,23,42,0.08),0_26px_48px_rgba(15,23,42,0.18)]"
        style={{ backgroundColor: theme.panel }}
      >
        <div
          className="absolute right-6 top-5 h-16 w-16 rounded-full border-[0.4rem] border-white shadow-[0_8px_0_rgba(15,23,42,0.10)] sm:h-20 sm:w-20"
          style={{ backgroundColor: theme.accent }}
          aria-hidden="true"
        >
          <span className="absolute left-[26%] top-[34%] h-2.5 w-2.5 rounded-full bg-white sm:h-3 sm:w-3" />
          <span className="absolute right-[26%] top-[34%] h-2.5 w-2.5 rounded-full bg-white sm:h-3 sm:w-3" />
          <span className="absolute bottom-[22%] left-1/2 h-3 w-8 -translate-x-1/2 rounded-b-full border-b-4 border-white sm:w-10" />
        </div>
        <output
          className="font-rounded text-[clamp(8rem,22vw,18rem)] font-black leading-none"
          style={{
            color: theme.numeral,
            textShadow: `0 0.08em 0 ${theme.numeralShadow}, 0 0.14em 0 rgba(15, 23, 42, 0.12)`,
          }}
          aria-label={`Current bead count is ${value}`}
        >
          {value}
        </output>
      </div>
    </div>
  );
}
