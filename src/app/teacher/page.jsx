"use client"
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/CardTeacher'
import { Box, Grid } from '@mui/material'
import AppShell from '../../components/app-shell'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../store/actions/fetchTeacher'
import CardNoData from '../../components/card/CardNoData'

const Teachers = () =>{
const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.teacher)
  const [render, setRender] = useState(false)
  useEffect( () =>{
    dispatch(fetchTeachers())
  }, [render])
  const dataCount = Array.isArray(data) ? data.length : 0;
  return(
    <AppShell showSidebar={false}>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
        {
          dataCount > 0 ?
          data?.map((element) =>
            <Grid key={element.id} item>
              <Card setRender={setRender} element={element} />
            </Grid>
          ) :
          <CardNoData></CardNoData> 
          
        }
      </Grid>
    </AppShell>
  )
}

export default Teachers