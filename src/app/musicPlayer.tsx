'use client';

import React, { useRef, useState } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(
    new Audio('/static/starry-night (1).mp3')
  );
  const MAX = 100;

  function toggleAudio(): void {
    console.log(audioRef.current)
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }


  return (
    <div>
      <button onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default MusicPlayer;
