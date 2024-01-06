"use client";

import React, { useEffect, useRef, useState } from "react";
import SliderTime from "./components/Slider/SliderTime";
import Content from "./components/Card/Content";
import PlayNavigation from "./components/Card/PlayNavigation";
import Selection from "./components/Selection";
import { songs } from "../../data/dummyData";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(0);
  const [selectedMetaData, setSelectedMetaData] = useState(songs[selectedSong]);

  useEffect(() => {
    setSelectedMetaData(songs[selectedSong]);
  }, [selectedSong, selectedMetaData]);

  const song = new Audio(selectedMetaData.url);
  const audioRef = useRef<HTMLAudioElement>(song);

  function handleSongChange() {
    audioRef.current.src = selectedMetaData.url;
  }

  function toggleAudio(): void {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function backToStart(): void {
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function nextSong(): void {
    if (selectedSong + 1 !== songs.length) {
      setSelectedSong(selectedSong + 1);
    } else {
      setSelectedSong(0);
    }
    handleSongChange()
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
          backToStart={backToStart}
          nextSong={nextSong}
        />
      </div>
      <div className="overflow-y-scroll border-2 border-none rounded flex-1 scrollbar-hide">
        <Selection />
      </div>
    </div>
  );
}

export default MusicPlayer;
