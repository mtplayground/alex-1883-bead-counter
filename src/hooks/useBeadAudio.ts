import { useMemo } from "react";

const beadSoundPath = "/sounds/bead-pop.wav";
const beadSoundVolume = 0.32;

export function useBeadAudio() {
  const beadSound = useMemo(() => {
    const audio = new Audio(beadSoundPath);
    audio.preload = "auto";
    audio.volume = beadSoundVolume;
    return audio;
  }, []);

  return function playBeadSound() {
    const sound = beadSound.cloneNode(true);

    if (!(sound instanceof HTMLAudioElement)) {
      return;
    }

    sound.volume = beadSoundVolume;
    sound.play().catch(() => {
      // Browsers can decline audio before a trusted gesture; the visual feedback still runs.
    });
  };
}
