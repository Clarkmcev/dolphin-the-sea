import MusicPlayer from '@/app/musicPlayer'
import React from 'react'
import Header from './Header'

function Card() {
  return (
    <div className="bg-red-500 max-w-lg w-full rounded-lg">
      <Header/>
      <MusicPlayer/>
    </div>
  )
}

export default Card