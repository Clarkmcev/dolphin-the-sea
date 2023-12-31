import React from "react";
import CustomButton from "./CustomButton";
import { PauseIconSolid } from "../icons/PauseIcon";
import { PlayIconOutline, PlayIconSolid } from "../icons/PlayIcon";
import { StopIconOutline, StopIconSolid } from "../icons/StopIcon";
import { ICON_STYLING_PRIMARY, ICON_STYLING_SECONDARY } from "@/app/constants/constants";
import { NextIconOutline, NextIconSolid } from "../icons/NextIcon";

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  onClick: () => void;
  backToStart: () => void;
  nextSong: () => void;
  priorSong: () => void;
  isPlaying: boolean;
}

function PlayNavigation({ audioRef, onClick, backToStart, nextSong, priorSong, isPlaying }: Props) {
  return (
    <div className="flex w-full items-center justify-center py-4 space-x-4">
      {/* Left next button */}
      <CustomButton
        onClick={priorSong}
        outline={<NextIconOutline className={`${ICON_STYLING_SECONDARY} rotate-180`} />}
      />
      {isPlaying ? (
        <CustomButton
          onClick={onClick}
          outline={<PauseIconSolid className={ICON_STYLING_PRIMARY}  />}
        />
      ) : (
        <CustomButton
          onClick={onClick}
          outline={<PlayIconSolid className={ICON_STYLING_PRIMARY} />}
        />
      )}
      {/* Right next button */}
      <CustomButton
        onClick={nextSong}
        outline={<NextIconOutline className={ICON_STYLING_SECONDARY} />}
      />
    </div>
  );
}

export default PlayNavigation;
