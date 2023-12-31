import React, { useEffect, useState } from "react";
import "./sliderCss.css";
import { secondsToHms } from "@/app/utils";

interface Props {
  audioRef: any;
}

function SliderTime({ audioRef }: Props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function roundUp(n: number) {
    return Math.ceil(n);
  }

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(roundUp(audio.currentTime));
    };

    const updateDuration = () => {
      setDuration(roundUp(audio.duration));
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  });

  const handleTimeChange = (event: any) => {
    const audio = audioRef.current;
    audio.currentTime = event.target.value;
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="flex items-center px-6 space-x-2">
      <p className="px-4 text-fourth text-center w-20 overflow-hidden">{secondsToHms(currentTime)}</p>
      <div className="w-full">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleTimeChange}
          className="cursor-pointer time-slider"
        />
      </div>
      <p className="px-4 w-20 overflow-hidden text-fourth">
        {secondsToHms(duration - currentTime)}
      </p>
    </div>
  );
}

export default SliderTime;
