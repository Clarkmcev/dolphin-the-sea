import React, { useEffect, useState } from "react";
import './sliderCss.css'

interface Props {
    audioRef: any
}

function SliderTime({ audioRef }: Props) {
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const audio = audioRef.current;
    
        const updateTime = () => {
          setCurrentTime(audio.currentTime);
        };
    
        const updateDuration = () => {
          setDuration(audio.duration);
        };
    
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
    
        return () => {
          audio.removeEventListener('timeupdate', updateTime);
          audio.removeEventListener('loadedmetadata', updateDuration);
        };
      },);

      const handleTimeChange = (event: any) => {
        const audio = audioRef.current;
        audio.currentTime = event.target.value;
        setCurrentTime(audio.currentTime);
      };
    

  return (
    <div>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleTimeChange}
        className="cursor-pointer volume-slider"
      />
    </div>
  );
}

export default SliderTime;
