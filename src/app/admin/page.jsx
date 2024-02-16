"use client"
import React from 'react'
import AppShell from '../../components/app-shell'
import Image from 'next/image';
import football from '../../../public/fotball.webp'
import basketball from '../../../public/basketball.jpg'
import volleyball from '../../../public/volleyball.jpg'
import { useSelector } from 'react-redux'

const Admin = () => {
  const selectedClub = useSelector((state) => state.selectedClub.value.id)

  return (
    <AppShell>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {
              selectedClub == 1 ? <Image src={football} alt='footbal picture' width={500} height={400} />
                                : selectedClub == 2 ? <Image src={basketball} alt='footbal picture' width={500} height={400} />
                                                    : <Image src={volleyball} alt='footbal picture' width={500} height={400} />
            }
            
          </div>
    </AppShell>
  )
}

export default Admin