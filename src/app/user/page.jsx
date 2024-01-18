"use client"
import React from 'react'
import Card from '../../components/card/Card'
import { Grid } from '@mui/material'
import AppShell from '../../components/app-shell'



const Users = () => {
  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
      </Grid>
    </AppShell>
  )
}

export default Users