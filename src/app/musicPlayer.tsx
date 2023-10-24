"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "./components/icons/PlayIcon";
import { PauseIconOutline, PauseIconSolid } from "./components/icons/PauseIcon";
import CustomButton from "./components/Card/CustomButton";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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

  return (
    <div>
      <button className="" onClick={toggleAudio}>
        {isPlaying ? (
          <CustomButton
            onClick={toggleAudio}
            solid={<PlayIconSolid className="w-10-10" />}
            outline={<PlayIconOutline className="w-10 h-10" />}
          />
        ) : (
          <CustomButton
            onClick={toggleAudio}
            solid={<PauseIconSolid className="w-10-10" />}
            outline={<PauseIconOutline className="w-10 h-10" />}
          />
        )}
      </button>
    </div>
  );
}

export default MusicPlayer;
