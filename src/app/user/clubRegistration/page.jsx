"use client"
import React from 'react'
import AppShell from '../../../components/app-shell'
import Confirmation from "../../../components/confirmation"
import { useSelector } from 'react-redux'

const ClubRegistration = (props) => {
  const selectedClub = useSelector((state) => state.selectedClub.value.name)

  return (
    <AppShell showSidebar={true}>
        <Confirmation club={selectedClub} action={true} />
    </AppShell>
  )
}

export default ClubRegistration