"use client"
import React from 'react'
import AppShell from '../../../components/app-shell'
import Confirmation from "../../../components/confirmation"
import { useSelector } from 'react-redux'
import Abandon from '../../../components/confirmation/Abandon'

const ClubRegistration = (props) => {
  const selectedClub = useSelector((state) => state.selectedClub.value.name)
  
  return (
    <AppShell >
        <Abandon />
    </AppShell>
  )
}

export default ClubRegistration