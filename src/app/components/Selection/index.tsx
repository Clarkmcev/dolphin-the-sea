import React from "react";
import { songs } from "../../../../data/songs";

function Selection() {
  return (
    <div>
      {songs.map((song: any, i: any) => (
        <div key={i}>{song.title}</div>
      ))}
    </div>
  );
}

export default Selection;
