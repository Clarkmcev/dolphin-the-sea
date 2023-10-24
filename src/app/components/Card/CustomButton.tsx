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
      onClick={onClick}
      onMouseEnter={toggleHoverIn}
      onMouseLeave={toggleHoverOut}
    >
      <div className="w-10 h-10">{hover ? solid : outline}</div>
    </button>
  );
}

export default CustomButton;
