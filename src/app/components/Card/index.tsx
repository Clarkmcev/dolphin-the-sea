import MusicPlayer from "@/app/musicPlayer";
import React from "react";

interface Props {
  className?: string;
}

function Card({ className }: Props = {}) {
  return (
    <div className={`max-w-2xl m-auto w-full bg-secondary z-30 ${className}`}>
      <MusicPlayer />
    </div>
  );
}

export default Card;
