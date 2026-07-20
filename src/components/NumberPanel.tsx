type NumberPanelProps = {
  value: number;
};

export function NumberPanel({ value }: NumberPanelProps) {
  return (
    <div className="flex min-h-0 items-center justify-center">
      <div className="flex h-full w-full items-center justify-center rounded-[2rem] border-4 border-white/80 bg-white/75 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <output
          className="font-rounded text-[clamp(8rem,22vw,18rem)] font-black leading-none text-slate-900"
          aria-label={`Current bead count is ${value}`}
        >
          {value}
        </output>
      </div>
    </div>
  );
}
