type BeadProps = {
  color: string;
  label?: string;
};

export function Bead({ color, label }: BeadProps) {
  return (
    <span
      className="bead-shape block aspect-square w-full rounded-full border-[0.42rem] border-white shadow-[inset_-0.45rem_-0.55rem_0_rgba(15,23,42,0.16),inset_0.35rem_0.35rem_0_rgba(255,255,255,0.48),0_0.55rem_0_rgba(15,23,42,0.11)]"
      style={{ backgroundColor: color }}
      aria-label={label}
    />
  );
}
