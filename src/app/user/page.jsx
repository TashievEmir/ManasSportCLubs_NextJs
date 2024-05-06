"use client"
import React  from 'react'
import AppShell from '../../components/app-shell'
import { useSelector } from 'react-redux'
import manasLogo from '../../../public/manas_logo.png'
import { Typography } from '@mui/material';

const Users = () => {
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)
  const clubs = useSelector((state) => state?.club?.data)
  const selectedClubImage = clubs?.find(el => el.id === selectedClubId)?.photo
  const clubDescription = clubs?.find(el => el.id === selectedClubId)?.description
  const currentImage = selectedClubImage ? `data:image/png;base64,${selectedClubImage}` : manasLogo
  return (
    <AppShell showSidebar={true}>
      <div style={{display:"flex",flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
        <Typography sx={{marginBottom: "30px", fontSize: "1.4rem", textAlign: "justify", padding: "0 4rem"}}>
          {clubDescription}
        </Typography>
        <img style={{maxWidth: "60vw", maxHeight: "50vh"}} src={currentImage} alt='footbal picture' />
      </div>
    </AppShell>
  )
}

export default Users