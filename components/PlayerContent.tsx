"use client"

import { Song } from "@/types"

interface PlayerContentProps {
  song: Song
  songUrl: string
}

const PlayerContent :React.FC<PlayerContentProps> = ({song, songUrl}) => {
  
  return (
    <div>PlayerContent</div>
  )
}

export default PlayerContent