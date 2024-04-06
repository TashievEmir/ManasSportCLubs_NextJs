"use client"
import React, { use, useEffect, useState } from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, Table, TableBody, TableCell, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../../components/app-shell'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSchedule } from '../../../store/actions/fetchSchedule';
import AppTable from '../../../components/app-table';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const columns = [
  { field: 'Monday', headerName: 'Monday', type: 'number', width: 90, },
  { field: 'Tuesday', headerName: 'Tuesday', description: '', sortable: false, width: 90, },
  { field: 'Wednesday', headerName: 'Wednesday', type: 'number', width: 90, },
  { field: 'Thursday', headerName: 'Thursday', type: 'number', width: 90, },
  { field: 'Friday', headerName: 'Friday', type: 'number', width: 90, },
  { field: 'Place', headerName: 'Жер', type: 'number', width: 100, },
  { field: 'Auditorium', headerName: 'Аудитория', type: 'number', width: 100, },
  { field: 'StartTime', headerName: 'Башталыш убакыты', type: 'number', width: 150, },
  { field: 'EndTime', headerName: 'Бүтүү убакыты', type: 'number', width: 120, },
];


const Schedule = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.schedule)
    const selectedClub = useSelector((state) => state.selectedClub.value.id)

    useEffect( () => {
      dispatch(fetchSchedule(selectedClub))
    }, [])

  return (
    <AppShell showSidebar={true}>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppTable
              disabled={false}
              cols={columns}
              rows={[data]}
            />
          </LocalizationProvider>
          
      </Grid>
    </AppShell>
  )
}

export default Schedule