"use client"
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import $api from '../../utils/api'
import AlertComp from '../AlertComp/AlertComp';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {  useDispatch, useSelector } from "react-redux";

export default function AppTable({
    cols,
    rows,
    disabled
}) {
  const dispatch = useDispatch()
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)

  const [showAlert, setShowAlert] = useState(null);
  const scheduleData ={
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Place: "",
    Auditorium: "",
    StartTime: "00:00:00",
    EndTime: "00:00:00",
    ClubId: selectedClubId
  };

  async function Upgrade(){

    let response = await $api.post('/Club/UpdateSchedule', scheduleData);

    if(response.status == 200){
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }

  }

  const handleCheckboxChange = (index, day, checked) => {

    switch (day) {
      case 'Monday':
        scheduleData.Monday = checked; break;
      case 'Tuesday':
        scheduleData.Tuesday = checked; break;
      case 'Wednesday':
        scheduleData.Wednesday = checked; break;
      case 'Thursday':
        scheduleData.Thursday = checked; break;
      case 'Friday':
        scheduleData.Friday = checked; break;
      default:
        break;
    }    
    // const updatedScheduleData = [...scheduleData];
    // updatedScheduleData[index][day] = checked;
    // setScheduleData(updatedScheduleData);
  };

  const handleTextFieldChange = (index, field, value) => {

    switch (field) {
      case 'Place':
        scheduleData.Place = value; break;
      case 'Auditorium':
        scheduleData.Auditorium = value; break;
      default:
        break;
    }
    // const updatedScheduleData = [...scheduleData];
    // updatedScheduleData[index][field] = value;
    // setScheduleData(updatedScheduleData);
  };

  const handleTimeChange = (index, field, value) => {
    const selectedTime = new Date(value);
    const hours = selectedTime.getHours().toString().padStart(2, '0');
  const minutes = selectedTime.getMinutes().toString().padStart(2, '0');
  const seconds = selectedTime.getSeconds().toString().padStart(2, '0');

  // Construct the formatted time string in 'HH:mm:ss' format
  const formattedTime = `${hours}:${minutes}:${seconds}`;

    switch (field) {
      case 'StartTime':
        scheduleData.StartTime = formattedTime; break;
      case 'EndTime':
        scheduleData.EndTime = formattedTime; break;
      default:
        break;
    }
    // const updatedScheduleData = [...scheduleData];
    // updatedScheduleData[index][field] = value;
    // setScheduleData(updatedScheduleData);
  };

  return (
    <TableContainer component={Paper} sx={{borderRadius: "14px"}}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{backgroundColor: "#8855ED" }}>
          <TableRow>           
            {
                cols.map((item, idx) => (
                    <TableCell align="center" key={item.headerName + idx}>
                      <Typography sx={{color: "white", fontWeight:"bold"}} >
                        {item?.headerName} 
                        </Typography>
                    </TableCell>
                ))
            }
            {!disabled &&  <TableCell></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow sx={{borderSpacing: "20px"}}
              key={row.id + idx}
            >
              <TableCell width={30}>
                {!disabled ? 
                <Checkbox disabled={disabled}  defaultChecked={row?.monday} onChange={(e) => handleCheckboxChange(idx, 'Monday', e.target.checked)}/>
                    :
                    <Box sx={{bgcolor: row?.monday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
                }
              </TableCell>
              <TableCell  width={30}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.tuesday} onChange={(e) => handleCheckboxChange(idx, 'Tuesday', e.target.checked)}/>
                    :
                    <Box  sx={{bgcolor: row?.tuesday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
                }
              </TableCell>
              <TableCell  width={30}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.wednesday} onChange={(e) => handleCheckboxChange(idx, 'Wednesday', e.target.checked)}/>
                    :
                    <Box  sx={{bgcolor: row?.wednesday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
                }
              </TableCell>
              <TableCell  width={30}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.thursday} onChange={(e) => handleCheckboxChange(idx, 'Thursday', e.target.checked)}/>
                    :
                    <Box  sx={{bgcolor: row?.thursday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
                }
              </TableCell>
              <TableCell  width={30}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.friday} onChange={(e) => handleCheckboxChange(idx, 'Friday', e.target.checked)}/>
                    :
                    <Box  sx={{bgcolor: row?.friday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
                }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={200}>
                {
                  !disabled ?
                  <TextField
                    width="100%"
                   id="outlined-basic" 
                   label={row?.place} 
                   variant="outlined" 
                   onChange={(e) => handleTextFieldChange(idx, 'Place', e.target.value)} />
                   : <>{row?.place}</>
                }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={200}>
                {
                !disabled ?
                <TextField id="outlined-basic" label={row?.auditorium} variant="outlined" onChange={(e) => handleTextFieldChange(idx, 'Auditorium', e.target.value)} />
                :<>{row?.auditorium}</>
                }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={130}>
                {
                !disabled ?
                <TimePicker
                    label="Start Time"
                    value={row?.StartTime}
                    onChange={(newValue) => handleTimeChange(idx, 'StartTime', newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                :<>{row?.startTime}</>
                }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={125}>
                {
                !disabled ?
                <TimePicker
                    label="End Time"
                    value={row?.EndTime}
                    onChange={(newValue) => handleTimeChange(idx, 'EndTime', newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                :<>{row?.endTime}</>
                }
              </TableCell>
              {!disabled && 
                <TableCell sx={{margin: "0 auto"}} width={90}>
                    <Button sx={{ backgroundColor: "#370E8A", 
                                  color:"white",
                                  ':hover':{
                                    backgroundColor: '#8855ED'
                                }
                                }} 
                            onClick={Upgrade} 
                    > Жаңыртуу </Button>
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Расписание жаңыланды`: "Расписание жаңыланды"}/>}
    </TableContainer>
  );
}


