"use client"
import React, { useEffect } from 'react'
import Card from '../../components/card/CardAnnouncement'
import { Grid } from '@mui/material'
import AppShell from '../../components/app-shell'
import { observer } from 'mobx-react-lite';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnnouncements } from '../../store/actions/fetchAnnouncements'

const Users = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.announcement)
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
      </Grid>
    </AppShell>
  )
}

export default Users