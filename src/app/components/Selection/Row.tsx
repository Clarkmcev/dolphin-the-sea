import React, { useState } from "react";

interface Props {
  id: number;
  song: songMetadata;
  isActive: boolean;
  toggleSelection: (id: number) => void;
}

function SongRow({ id, song, isActive, toggleSelection }: Props) {
  return (
    <div className={`p-2 hover:bg-primary/20 group duration-150 transition-all ${isActive ? 'text-fourth' : 'text-ternary'}`}>
      <button onClick={() => toggleSelection(id)} className="p-4 w-full text-left">{song.title}</button>
    </div>
  );
}

export default SongRow;
