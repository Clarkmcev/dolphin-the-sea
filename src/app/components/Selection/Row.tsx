import React from "react";

interface Props {
  song: any;
}

function Row({ song }: Props) {
  return (
    <div className="p-2 hover:bg-primary/80 group duration-150 transition-all">
      <button className="p-4 w-full text-left group-hover:text-fourth">{song.title}</button>
    </div>
  );
}

export default Row;
