import React from 'react'
import SliderVolume from '../Slider/SliderVolume'
import { VolumeOutIconSolid } from '../icons/VolumeOutIcon'
import { ICON_STYLING_PRIMARY } from '@/app/constants/constants'
import { VolumeInIconSolid } from '../icons/VolumeInIcon'

interface Props {
  audioRef: React.MutableRefObject<HTMLAudioElement>
}

function Header({ audioRef } : Props) {
  return (
    <div className="flex items-center justify-center space-x-8">
      <VolumeOutIconSolid className={ICON_STYLING_PRIMARY} />
      <SliderVolume audioRef={audioRef} />
      <VolumeInIconSolid className={ICON_STYLING_PRIMARY} />
    </div>
  )
}

export default Header