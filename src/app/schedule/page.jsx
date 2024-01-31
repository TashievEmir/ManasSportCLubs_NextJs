"use client"
import React, { use, useEffect } from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../components/app-shell'
import { DataGrid } from '@mui/x-data-grid';
import { fetchMembers } from '../../store/actions/fetchMembers'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSchedule } from '../../store/actions/fetchSchedule';
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

const columns = [
  { field: 'Monday', headerName: 'Monday', type: 'number', width: 90, },
  { field: 'Tuesday', headerName: 'Tuesday', description: '', sortable: false, width: 90, 
  valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'Wednesday', headerName: 'Wednesday', type: 'number', width: 90, },
  { field: 'Thursday', headerName: 'Thursday', type: 'number', width: 90, },
  { field: 'Friday', headerName: 'Friday', type: 'number', width: 90, },
  { field: 'Place', headerName: 'Жер', type: 'number', width: 100, },
  { field: 'Auditorium', headerName: 'Аудитория', type: 'number', width: 100, },
  { field: 'StartTime', headerName: 'Башталыш убакыты', type: 'number', width: 150, },
  { field: 'EndTime', headerName: 'Бүтүү убакыты', type: 'number', width: 120, },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Schedule = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.schedule)
    useEffect( () => {
    dispatch(fetchSchedule())
    }, [])
    console.log(data)

    const events = [
      { title: 'Meeting', start: new Date() }
    ]

  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
      </div>
      {/* {
          data.map((element) =>
            <Grid key={element.id} item>
              <CardMember element={element} />
            </Grid>
          )
          
        } */}
      </Grid>
    </AppShell>
  )
}
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }
export default Schedule