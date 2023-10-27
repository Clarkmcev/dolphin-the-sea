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
  isPlaying: boolean;
}

function PlayNavigation({ audioRef, onClick, isPlaying }: Props) {
  return (
    <div className="flex w-full items-center justify-center py-4 space-x-20">
      {/* Left next button */}
      <CustomButton
        onClick={onClick}
        solid={<NextIconSolid className={`${ICON_STYLING_SECONDARY} rotate-180`} />}
        outline={<NextIconOutline className={`${ICON_STYLING_SECONDARY} rotate-180`} />}
      />
      {isPlaying ? (
        <CustomButton
          onClick={onClick}
          solid={<PauseIconSolid className={ICON_STYLING_PRIMARY} />}
          outline={<PauseIconSolid className={ICON_STYLING_PRIMARY} />}
        />
      ) : (
        <CustomButton
          onClick={onClick}
          solid={<PlayIconSolid className={ICON_STYLING_PRIMARY} />}
          outline={<PlayIconOutline className={ICON_STYLING_PRIMARY} />}
        />
      )}
      {/* Right next button */}
      <CustomButton
        onClick={onClick}
        solid={<NextIconSolid className={ICON_STYLING_SECONDARY} />}
        outline={<NextIconOutline className={ICON_STYLING_SECONDARY} />}
      />
      {/* Stop button */}
      {/* <CustomButton
        onClick={onClick}
        solid={<StopIconSolid className={ICON_STYLING} />}
        outline={<StopIconOutline className={ICON_STYLING} />}
      /> */}
    </div>
  );
}

export default PlayNavigation;
