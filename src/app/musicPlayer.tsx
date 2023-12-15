"use client";

import React, { useRef, useState } from "react";
import SliderTime from "./components/Slider/SliderTime";
import Content from "./components/Card/Content";
import PlayNavigation from "./components/Card/PlayNavigation";
import Selection from "./components/Selection";

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
    <div className="z-20 flex-col flex h-screen">
      <div>
        <Content />
        <SliderTime audioRef={audioRef} />
        <PlayNavigation
          isPlaying={isPlaying}
          audioRef={audioRef}
          onClick={toggleAudio}
        />
      </div>
      <div className="overflow-y-scroll border-2 border-none rounded flex-1 scrollbar-hide">
        <Selection />
      </div>
    </div>
  );
}

export default MusicPlayer;
