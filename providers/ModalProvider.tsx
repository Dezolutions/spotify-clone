"use client"

import AuthModal from '@/components/AuthModal'
import Modal from '@/components/Modal'
import React from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsMounted(true)
  } ,[])

  if(!isMounted) {
    return null;
  }
  return (
    <AuthModal/>
  )
}

export default ModalProvider