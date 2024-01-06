"use client";

import React, { useEffect, useRef, useState } from "react";
import SliderTime from "./components/Slider/SliderTime";
import SongContent from "./components/Card/Content";
import PlayNavigation from "./components/Card/PlayNavigation";
import Selection from "./components/Selection";
import { songs } from "../../data/dummyData";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(0);
  const [metadata, setMetadata] = useState<songMetadata>(songs[selectedSongId]);

  useEffect(() => {
    setMetadata(songs[selectedSongId]);
    handleSongChange();
    toggleAudio();
  }, [selectedSongId]);

  const song = new Audio(metadata.track);
  const audioRef = useRef<HTMLAudioElement>(song);

  function handleSongChange() {
    audioRef.current.src = metadata.track;
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

  function priorSong(): void {
    if (selectedSongId - 1 !== -1) {
      setSelectedSongId(selectedSongId - 1);
    } else {
      setSelectedSongId(0);
    }
  }

  function nextSong(): void {
    if (selectedSongId + 1 !== songs.length) {
      setSelectedSongId(selectedSongId + 1);
    } else {
      setSelectedSongId(0);
    }
  }

  function toggleSelection(id: number) {
    setSelectedSongId(id);
    if (id === selectedSongId) {
      backToStart();
    }
  }

  return (
    <div className="z-20 flex-col flex h-screen">
      <div>
        <SongContent metadata={metadata} />
        <SliderTime audioRef={audioRef} />
        <PlayNavigation
          isPlaying={isPlaying}
          audioRef={audioRef}
          onClick={toggleAudio}
          backToStart={backToStart}
          nextSong={nextSong}
          priorSong={priorSong}
        />
      </div>
      <div className="overflow-y-scroll border-2 border-none rounded flex-1 scrollbar-hide">
        <Selection
          selection={selectedSongId}
          toggleSelection={toggleSelection}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
