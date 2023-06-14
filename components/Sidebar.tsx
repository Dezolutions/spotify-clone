"use client"

import { usePathname} from 'next/navigation'
import { useMemo } from 'react'
import { IconType } from 'react-icons'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from './Box'

interface SidebarProps {
  children: React.ReactNode
}

interface Route {
  icon: IconType
  label: string,
  active: boolean,
  href: string
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {

  const pathname = usePathname()
  const routes = useMemo<Route[]>(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search'
    }
  ], [pathname])

  return (
    <div className='flex h-full'>
      <div className='md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box>Sidebar</Box>
        </div>
     </div>
  )
}

export default Sidebar