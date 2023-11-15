import React from "react";
import { songs } from "../../../../data/songs";
import Row from "./Row";

function Selection() {
  return (
    <div className="w-full h-fu overflow-y-auto ">
      {songs.map((song: any, i: any) => (
        <Row key={i} song={song} />
      ))}
    </div>
  );
}

export default Selection;
