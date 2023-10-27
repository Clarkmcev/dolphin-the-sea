import React from "react";
import path from "../../../../static/R-17161240-1611927201-5486.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className="flex-col flex items-center space-y-8 justify-center m-10">
      <Image src={path} width={500} height={500} alt="Picture of the author" className="rounded-lg" />
      <div className="text-2xl">Peggy gou</div>
    </div>
  );
}

export default Header;
