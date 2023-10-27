import React, { ReactElement, useState } from "react";
import { PlayIconOutline, PlayIconSolid } from "../icons/PlayIcon";

interface Props {
  onClick: () => void;
  solid: ReactElement;
  outline: ReactElement;
}

function CustomButton({ onClick, outline, solid }: Props) {
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
      {hover ? solid : outline}
    </button>
  );
}

export default CustomButton;
