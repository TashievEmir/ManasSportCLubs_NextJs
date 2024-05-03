"use client"
import React  from 'react'
import AppShell from '../../components/app-shell'
import { useSelector } from 'react-redux'
import Image from 'next/image';
import manasLogo from '../../../public/manas_logo.png'

const Admin = () => {
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)
  const clubs = useSelector((state) => state?.club?.data)
  const selectedClubImage = clubs?.find(el => el.id === selectedClubId)?.photo
  
  const currentImage = selectedClubImage ? `data:image/png;base64,${selectedClubImage}` : manasLogo

  return (
    <AppShell showSidebar={true}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Image src={currentImage} alt='footbal picture' width={500} height={400} />
          </div>
    </AppShell>
  )
}

export default Admin