import React from "react";
import { songs } from "../../../../data/songs";
import Row from "./Row";

function Selection() {
  return (
    <div className="w-full overflow-auto overflow-y-auto">
      {songs.map((song: any, i: any) => (
        <Row key={i} song={song} />
      ))}
    </div>
  );
}

export default Selection;
