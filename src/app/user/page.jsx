"use client"
import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import { Grid } from '@mui/material'
import AppShell from '../../components/app-shell'
import store from '../../store/mobx/Announcement'
import { observer } from 'mobx-react-lite';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnnouncements } from '../../store/actions/fetchAnnouncements'

const Users = observer( () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.announcement)
  console.log(data)
  useEffect( () =>{
    dispatch(fetchAnnouncements())
  }, [])

  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
        {
          data.map((element) =>
            <Grid key={element.id} item>
              <Card element={element} />
            </Grid>
          )
          
        }
          {/* <Grid item>
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
          </Grid> */}
      </Grid>
    </AppShell>
  )
})

export default Users