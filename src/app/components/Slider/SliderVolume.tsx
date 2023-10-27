import React, { useState } from "react";
import './sliderCss.css'

interface Props {
    audioRef: any
}

function SliderVolume({ audioRef } : Props) {
  const [volume, setVolume] = useState(50);

    const handleVolumeChange = (event: any) => {
        const volume = event.target.value;
        audioRef.current.volume = volume / 100;
        setVolume(volume);
      };

  return (
    <div className="w-44">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="cursor-pointer volume-slider"
      />
    </div>
  );
}

export default SliderVolume;
