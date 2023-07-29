"use client"

import { useRouter } from "next/navigation"
import { twMerge } from 'tailwind-merge'
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser"
import { FaUserAlt } from "react-icons/fa"


interface HeaderInterface {
  children: React.ReactNode,
  className?: string
}

const Header :React.FC<HeaderInterface> = ({children, className}) => {
  const router = useRouter()
  const {onOpen} = useAuthModal()
  const supabaseClient = useSupabaseClient()
  const {user} = useUser()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.refresh();

    if (error) {
      console.error(error.message);
    }
  }
  return (
    <div className={twMerge(`
      h-fit
      bg-gradient-to-b
      from-emerald-800
      p-6
    `, className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-4 items-center">
          <button onClick={() => router.back()} className="rounded-full bg-black flex items-start justify-center hover:opacity-75 transition">
            <RxCaretLeft size={35} className="text-white"/>
          </button>
          <button onClick={() => router.forward()}  className="rounded-full bg-black flex items-start justify-center hover:opacity-75 transition">
            <RxCaretRight size={35} className="text-white"/>
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center transition hover:opacity-75">
            <HiHome className="text-black" size={20}/>
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center transition hover:opacity-75">
            <BiSearch className="text-black" size={20}/>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex items-center gap-x-4">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push('/account')}
                className="bg-white"
              >
                <FaUserAlt/>
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button onClick={onOpen} className=" bg-transparent text-neutral-300 font-medium">
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={onOpen} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
          
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header