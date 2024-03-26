"use client"
import React, { useEffect } from 'react'
import CardMember from '../../../components/card/CardMember'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../../components/app-shell'
import { fetchMembers } from '../../../store/actions/fetchMembers'
import { useDispatch, useSelector } from 'react-redux'
import CardNoData from '../../../components/card/CardNoData'


const MemberList = () => {

    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.member)
    const selectedClub = useSelector((state) => state.selectedClub.value.id)
    useEffect( () => {
    dispatch(fetchMembers(selectedClub))
    }, [])
    const dataCount = Array.isArray(data) ? data.length : 0;
    
  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
      {
        dataCount > 0 ? 
          data?.map((element) =>
            <Grid key={element.id} item>
              <CardMember element={element} />
            </Grid>
          ) :
          <CardNoData></CardNoData>
        }
      </Grid>
    </AppShell>
  )
}

export default MemberList