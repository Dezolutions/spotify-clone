"use client"

import LibraryItem from "@/components/LibraryItem"
import LikeButton from "@/components/LikeButton"
import useOnPlay from "@/hooks/useOnPlay"
import { Song } from "@/types"

interface SearchContentProps {
  songs: Song[]
}
const SearchContent: React.FC<SearchContentProps> = ({songs}) => {
  const onPlay = useOnPlay(songs);
  if(!songs) {
    return (
      <p className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found.
      </p>
    )
  }
  return (
    <div className="flex flex-col gap-y-2 px-6 w-full">
      {songs.map(song => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <LibraryItem data={song} onClick={(id: string) => onPlay(id)}/>
          </div>
          <LikeButton songId={song.id}/>
        </div>
      ))}
    </div>
  )
}

export default SearchContent