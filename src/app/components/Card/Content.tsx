import React from "react";
import path from "../../../../static/R-17161240-1611927201-5486.jpg";
import Image from "next/image";

interface Props {
  metadata: songMetadata;
}

function SongContent({ metadata }: Props) {
  return (
    <div className="flex-col flex items-center space-y-8 justify-center py-10">
      <Image
        src={metadata.picture}
        width={400}
        height={400}
        alt="Picture of the author"
        className="rounded-lg shadow-lg border-2"
      />
      <div className="flex flex-col space-y-2 text-fourth items-center my-20">
        <p className="text-3xl">{metadata.title}</p>
        <p className="text-lg text-ternary">{metadata.artist}</p>
      </div>
    </div>
  );
}

export default SongContent;
