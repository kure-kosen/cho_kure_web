import React from "react";

export default ({ url, duration }: { url: string; duration: number }) => {
  const [audio] = React.useState(new Audio());
  const [, _forceUpdate] = React.useState(false);
  const forceUpdate = () => _forceUpdate(prevState => !prevState);

  React.useEffect(() => {
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
      audio.addEventListener("timeupdate", forceUpdate);
    };
  }, []);

  const play = () => audio.play();
  const pause = () => audio.pause();
  const jump = (value: number) => (audio.currentTime = value);

  return {
    isPlay: !audio.paused,
    play,
    pause,
    jump,
    times: {
      currentTime: audio.currentTime,
      duration: audio.duration || duration
    }
  };
};
