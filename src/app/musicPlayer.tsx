"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "./components/icons/PlayIcon";
import { PauseIconOutline, PauseIconSolid } from "./components/icons/PauseIcon";
import CustomButton from "./components/Card/CustomButton";
import { StopIconOutline, StopIconSolid } from "./components/icons/StopIcon";
import Slider from "./components/Slider";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const iconStyle = "w-10 h-10";

  useEffect(() => {
    setAudio(new Audio("/static/starry-night (1).mp3"));
    // only run once on the first render on the client
  }, []);

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

  function stopAudio(): void {
    // audioRef.current?.stop();
  }

  function onSlide(value: number): void {
  }

  return (
    <div>
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
      <Slider min={1} max={100} onChange={onSlide}/>
    </div>
  );
}

export default MusicPlayer;
