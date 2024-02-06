"use client"
import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../components/app-shell'
import Confirmation from "../../components/confirmation/confirmation"

const ClubRegistration = (props) => {


  return (
    <AppShell >
        <Confirmation clubName = {props.clubName}></Confirmation>
    </AppShell>
  )
}

export default ClubRegistration