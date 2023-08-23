"use client"
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'

import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'
import { Song } from '@/types'
import LibraryItem from './LibraryItem'
import useOnPlay from '@/hooks/useOnPlay'

interface LibraryProps {
  songs: Song[]
}
const Library: React.FC<LibraryProps> = ({songs}) => {
  const onPlay = useOnPlay(songs);
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const {user} = useUser();
  const onClick = () => {
    !user ? authModal.onOpen() : uploadModal.onOpen();
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2 cursor-pointer">
          <TbPlaylist size={26} className='text-neutral-400'/>
          <p className='text-neutral-400 font-medium text-md'>Library</p>
        </div>
        <AiOutlinePlus size={20} onClick={onClick} className='text-neutral-400 cursor-pointer transition hover:text-white'/>
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
        {songs?.map(song => <LibraryItem key={song.id} data={song} onClick={(id: string) => onPlay(id)}/>)}
      </div>
    </div>
  )
}

export default Library