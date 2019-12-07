import { useState, useCallback, useEffect } from "react";

export interface UseAudio {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  jump: (value: number) => void;
  times: {
    currentTime: number;
    duration: number;
  };
}

interface Props {
  url: string;
  duration: number;
}

export const useAudio = ({ url, duration }: Props): UseAudio => {
  const [audio] = useState(new Audio());
  const [, setForceUpdate] = useState(false);
  const forceUpdate = useCallback(
    () => setForceUpdate(prevState => !prevState),
    []
  );

  useEffect(() => {
    audio.preload = "none";
    audio.src = url;

    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);
    audio.addEventListener("ended", forceUpdate);
    audio.addEventListener("timeupdate", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
      audio.removeEventListener("ended", forceUpdate);
      audio.removeEventListener("timeupdate", forceUpdate);
    };
  }, []);

  const play = useCallback(() => audio.play(), [audio]);
  const pause = useCallback(() => audio.pause(), [audio]);
  const jump = useCallback((value: number) => (audio.currentTime = value), [
    audio
  ]);

  return {
    isPlaying: !audio.paused,
    play,
    pause,
    jump,
    times: {
      currentTime: audio.currentTime,
      duration: audio.duration || duration
    }
  };
};
