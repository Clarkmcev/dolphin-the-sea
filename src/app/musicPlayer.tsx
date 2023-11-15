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
    <div className="wrapper bg-red-500">
      <Content />
      <div className="scrollable">
        <div className="h-96">HELLO</div>
        <div className="h-96">HELLO</div>
        <div className="h-96">HELLO</div>
      </div>

      {/* <div className="flex items-center w-full justify-center">
        <div className="w-full">
          <SliderTime audioRef={audioRef} />
          <PlayNavigation
            isPlaying={isPlaying}
            audioRef={audioRef}
            onClick={toggleAudio}
          />
          <Selection/>
        </div>
      </div> */}
    </div>
  );
}

export default MusicPlayer;
