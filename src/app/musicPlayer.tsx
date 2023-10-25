"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "./components/icons/PlayIcon";
import { PauseIconOutline, PauseIconSolid } from "./components/icons/PauseIcon";
import CustomButton from "./components/Card/CustomButton";
import { StopIconOutline, StopIconSolid } from "./components/icons/StopIcon";

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
    console.log(audioRef)
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
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
      </div>
    </div>
  );
}

export default MusicPlayer;
