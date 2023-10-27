"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "./components/icons/PlayIcon";
import { PauseIconOutline, PauseIconSolid } from "./components/icons/PauseIcon";
import CustomButton from "./components/Card/CustomButton";
import { StopIconOutline, StopIconSolid } from "./components/icons/StopIcon";
import Slider from "./components/Slider/SliderVolume";
import SliderVolume from "./components/Slider/SliderVolume";
import SliderTime from "./components/Slider/SliderTime";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const iconStyle = "w-10 h-10";
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

  const handleVolumeChange = (event: any) => {
    const volume = event.target.value;
    audioRef.current.volume = volume / 100
    setVolume(volume);
  };


  return (
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
      <SliderVolume volume={volume} setVolume={setVolume} handleVolumeChange={handleVolumeChange}/>
      <SliderTime audioRef={audioRef} />

    </div>
  );
}

export default MusicPlayer;
