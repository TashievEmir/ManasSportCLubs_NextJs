"use client"
import React from 'react'
import AppShell from '../../../components/app-shell'
import Abandon from '../../../components/confirmation/Abandon'

const ClubRegistration = (props) => {
  
  return (
    <AppShell showSidebar={true}>
        <Abandon />
    </AppShell>
  )
}

export default ClubRegistration