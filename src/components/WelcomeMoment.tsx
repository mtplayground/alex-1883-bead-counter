type WelcomeMomentProps = {
  visible: boolean;
};

export function WelcomeMoment({ visible }: WelcomeMomentProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="welcome-moment pointer-events-none fixed inset-x-4 bottom-6 z-30 mx-auto flex max-w-2xl items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span className="welcome-dot h-14 w-14 rounded-full border-[0.35rem] border-white bg-red-500 shadow-[0_0.6rem_0_rgba(15,23,42,0.10)]" />
      <span className="welcome-trail h-4 w-12 rounded-full bg-white/80" />
      <span className="welcome-dot welcome-dot-delay h-14 w-14 rounded-full border-[0.35rem] border-white bg-blue-500 shadow-[0_0.6rem_0_rgba(15,23,42,0.10)]" />
      <span className="welcome-trail h-4 w-12 rounded-full bg-white/80" />
      <span className="welcome-target h-20 w-20 rounded-full border-[0.4rem] border-white bg-yellow-300 shadow-[0_0.8rem_0_rgba(15,23,42,0.10)]" />
    </div>
  );
}
