import React, { ReactElement, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "../icons/PlayIcon";

interface Props {
  onClick: () => void;
  outline: ReactElement;
}

function CustomButton({ onClick, outline }: Props) {
  const [hover, setHover] = useState(false);

  function toggleHoverIn(): void {
    setHover(true);
  }

  function toggleHoverOut(): void {
    setHover(false);
  }

  return (
    <button
      className="rounded-full p-2"
      onClick={onClick}
      onMouseEnter={toggleHoverIn}
      onMouseLeave={toggleHoverOut}
    >
      {outline}
    </button>
  );
}

export default CustomButton;
