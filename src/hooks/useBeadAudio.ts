import { useMemo } from "react";

const beadSoundPath = "/sounds/bead-pop.wav";
const celebrationSoundPath = "/sounds/celebration-chime.wav";
const beadSoundVolume = 0.32;
const celebrationSoundVolume = 0.42;

export function useBeadAudio() {
  const beadSound = useMemo(
    () => createAudio(beadSoundPath, beadSoundVolume),
    [],
  );
  const celebrationSound = useMemo(
    () => createAudio(celebrationSoundPath, celebrationSoundVolume),
    [],
  );

  return {
    playBeadSound: () => playSound(beadSound, beadSoundVolume),
    playCelebrationSound: () =>
      playSound(celebrationSound, celebrationSoundVolume),
  };
}

function createAudio(path: string, volume: number) {
  const audio = new Audio(path);
  audio.preload = "auto";
  audio.volume = volume;
  return audio;
}

function playSound(audio: HTMLAudioElement, volume: number) {
  const sound = audio.cloneNode(true);

  if (!(sound instanceof HTMLAudioElement)) {
    return;
  }

  sound.volume = volume;
  sound.play().catch(() => {
    // Browsers can decline audio before a trusted gesture; the visual feedback still runs.
  });
}
