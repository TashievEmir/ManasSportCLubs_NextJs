"use client"
import React  from 'react'
import AppShell from '../../components/app-shell'
import { useSelector } from 'react-redux'
import Image from 'next/image';
import manasLogo from '../../../public/manas_logo.png'

const Users = () => {
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)
  const clubs = useSelector((state) => state?.club?.data)
  const selectedClubImage = clubs?.find(el => el.id === selectedClubId)?.photo
  const clubDescription = clubs?.find(el => el.id === selectedClubId)?.description
  const currentImage = selectedClubImage ? `data:image/png;base64,${selectedClubImage}` : manasLogo
  return (
    <AppShell showSidebar={true}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <h1>{clubDescription}</h1>
        <Image src={currentImage} alt='footbal picture' width={500} height={400} />
      </div>
    </AppShell>
  )
}

export default Users