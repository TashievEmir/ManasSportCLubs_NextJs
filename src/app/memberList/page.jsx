"use client"
import React, { useEffect } from 'react'
import CardMember from '../../components/card/CardMember'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../components/app-shell'
import { fetchMembers } from '../../store/actions/fetchMembers'
import { useDispatch, useSelector } from 'react-redux'


const MemberList = () => {

    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.member)
    useEffect( () => {
    dispatch(fetchMembers())
    }, [])

  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
      {
          data.map((element) =>
            <Grid key={element.id} item>
              <CardMember element={element} />
            </Grid>
          )
          
        }
      </Grid>
    </AppShell>
  )
}

export default MemberList