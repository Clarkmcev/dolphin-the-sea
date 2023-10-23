import React from "react";
import path from "../../../../static/artworks-z1Qt4yM4FhOCFxJV-10twmg-t500x500.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-center m-10">
      <Image src={path} width={500} height={500} alt="Picture of the author" className="rounded-lg" />
    </div>
  );
}

export default Header;
