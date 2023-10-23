"use client";

import React, { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setAudio(new Audio("/static/starry-night (1).mp3"))
  // only run once on the first render on the client
  }, [])

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
      <button className="bg-primary" onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default MusicPlayer;
