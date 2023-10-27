"use client";

import React, { useRef, useState } from "react";
import SliderTime from "./components/Slider/SliderTime";
import Content from "./components/Card/Content";
import Header from "./components/Card/Header";
import PlayNavigation from "./components/Card/PlayNavigation";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

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
      <Header audioRef={audioRef} />
      <Content />
      <div className="flex items-center w-full justify-center">
        <div className="w-full">
          <SliderTime audioRef={audioRef} />
          <PlayNavigation
            isPlaying={isPlaying}
            audioRef={audioRef}
            onClick={toggleAudio}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
