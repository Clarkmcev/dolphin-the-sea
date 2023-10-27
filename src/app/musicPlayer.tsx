"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "./components/icons/PlayIcon";
import { PauseIconOutline, PauseIconSolid } from "./components/icons/PauseIcon";
import CustomButton from "./components/Card/CustomButton";
import { StopIconOutline, StopIconSolid } from "./components/icons/StopIcon";
import SliderVolume from "./components/Slider/SliderVolume";
import SliderTime from "./components/Slider/SliderTime";
import Content from "./components/Card/Content";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const iconStyle = "w-20 h-20";
  const song = new Audio("/static/starry-night (1).mp3");
  const audioRef = useRef<HTMLAudioElement>(song);

  function toggleAudio(): void {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="pt-20">
        <SliderVolume
          audioRef={audioRef}
        />
      <Content />
      <div className="flex items-center w-full justify-center">
        {isPlaying ? (
          <CustomButton
            onClick={toggleAudio}
            solid={<PauseIconSolid className={iconStyle} />}
            outline={<PauseIconSolid className={iconStyle} />}
          />
        ) : (
          <CustomButton
            onClick={toggleAudio}
            solid={<PlayIconSolid className={iconStyle} />}
            outline={<PlayIconOutline className={iconStyle} />}
          />
        )}
        {/* Stop button */}
        <CustomButton
          onClick={toggleAudio}
          solid={<StopIconSolid className={iconStyle} />}
          outline={<StopIconOutline className={iconStyle} />}
        />
        <SliderTime audioRef={audioRef} />
      </div>
    </div>
  );
}

export default MusicPlayer;
