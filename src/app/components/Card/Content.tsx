import React from "react";
import path from "../../../../static/R-17161240-1611927201-5486.jpg";
import Image from "next/image";

function Content() {
  return (
    <div className="flex-col flex items-center space-y-8 justify-center py-10">
      <Image
        src={path}
        width={400}
        height={400}
        alt="Picture of the author"
        className="rounded-lg shadow-lg"
      />
      <div className="flex flex-col space-y-2 text-fourth items-center my-20">
        <p className="text-3xl">Starry night</p>
        <p className="text-lg text-ternary">Peggy Gou</p>
      </div>
    </div>
  );
}

export default Content;
