"use client"
import React from 'react'
import AppShell from '../../../components/app-shell'
import Confirmation from "../../../components/confirmation"
import { useSelector } from 'react-redux'

const ClubRegistration = (props) => {
  const selectedClub = useSelector((state) => state.selectedClub.value.name)
  
  return (
    <AppShell >
        <Confirmation club={selectedClub} action={false} />
    </AppShell>
  )
}

export default ClubRegistration