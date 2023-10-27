import React, { useState } from "react";
import './sliderCss.css'

interface Props {
    volume: number
    setVolume: (number : number) => void
    handleVolumeChange: (event: any) => void
}

function SliderVolume({ volume, setVolume, handleVolumeChange } : Props) {
  return (
    <div className="">
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
