import React from 'react'
import AppShell from '../../components/app-shell'
import Image from 'next/image';
import football from '../../../public/fotball.webp'

const Admin = () => {
  return (
    <AppShell>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Image src={football} alt='footbal picture' />
          </div>
    </AppShell>
  )
}

export default Admin