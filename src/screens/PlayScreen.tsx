import { useEffect, useMemo, useState } from "react";
import { Celebration } from "../components/Celebration";
import { NumberPanel } from "../components/NumberPanel";
import { BeadTray } from "../components/BeadTray";
import { WelcomeMoment } from "../components/WelcomeMoment";
import { useBeadAudio } from "../hooks/useBeadAudio";
import { useBeadCounter } from "../hooks/useBeadCounter";
import { getSessionTheme } from "../theme";

export function PlayScreen() {
  const theme = useMemo(() => getSessionTheme(), []);
  const beadCounter = useBeadCounter();
  const { playBeadSound, playCelebrationSound } = useBeadAudio();
  const [celebrationKey, setCelebrationKey] = useState(0);
  const [feedbackKey, setFeedbackKey] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const welcomeTimer = window.setTimeout(() => {
      setShowWelcome(false);
    }, 4200);

    return () => window.clearTimeout(welcomeTimer);
  }, []);

  function handleAddBead() {
    if (!beadCounter.canAddBead) {
      return;
    }

    const willReachTen = beadCounter.beads.length === 9;
    beadCounter.addBead();
    setShowWelcome(false);
    setFeedbackKey((currentKey) => currentKey + 1);

    if (willReachTen) {
      playCelebrationSound();
      setCelebrationKey((currentKey) => currentKey + 1);
      return;
    }

    playBeadSound();
  }

  return (
    <main
      className="min-h-dvh overflow-hidden text-slate-950"
      style={{ background: theme.background }}
    >
      <section
        className="mx-auto grid min-h-dvh w-full max-w-7xl grid-rows-[minmax(15rem,42vh)_1fr] gap-5 px-5 py-5 sm:px-8 lg:px-10"
        aria-label="Bead counter play space"
      >
        <NumberPanel
          feedbackKey={feedbackKey}
          value={beadCounter.beads.length}
          theme={theme}
        />
        <BeadTray
          beads={beadCounter.beads}
          canAddBead={beadCounter.canAddBead}
          onAddBead={handleAddBead}
          theme={theme}
        />
        <WelcomeMoment visible={showWelcome} />
        <Celebration celebrationKey={celebrationKey} />
      </section>
    </main>
  );
}
