"use client"
import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import { Grid } from '@mui/material'
import AppShell from '../../components/app-shell'
import { observer } from 'mobx-react-lite';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../store/actions/fetchTeacher'

const Teachers = () =>{
const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.teacher)
  useEffect( () =>{
    dispatch(fetchTeachers())
  }, [])

  return(
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

export default Teachers