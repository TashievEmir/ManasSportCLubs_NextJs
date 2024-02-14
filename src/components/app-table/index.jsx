import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export default function AppTable({
    cols,
    rows,
    disabled
}) {

  return (
    <TableContainer component={Paper} sx={{borderRadius: "15px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: "#8855ED" }}>
          <TableRow >           
            {
                cols.map((item, idx) => (
                    <TableCell  align="center" key={item.headerName + idx}>
                      <Typography sx={{color: "white", fontWeight:"bold"}} >{item?.headerName} </Typography>
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
              <TableCell width={90}>
                {!disabled ? 
                <Checkbox disabled={disabled}  defaultChecked={row?.monday}/>
                    :
                    <Box sx={{bgcolor: row?.monday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
            }
              </TableCell>
              <TableCell  width={90}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.tuesday}/>
                    :
                    <Box  sx={{bgcolor: row?.tuesday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
            }
                </TableCell>
              <TableCell  width={90}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.wednesday}/>
                    :
                    <Box  sx={{bgcolor: row?.wednesday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
            }
                </TableCell>
              <TableCell  width={90}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.thursday}/>
                    :
                    <Box  sx={{bgcolor: row?.thursday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
            }
                </TableCell>
              <TableCell  width={90}>
                {!disabled ? 
                <Checkbox disabled={disabled} defaultChecked={row?.friday}/>
                    :
                    <Box  sx={{bgcolor: row?.friday ? "green" : "red", width: "50px", height: "50px", margin: "0 auto", borderRadius: "10px"}}></Box>
            }
                </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>{row?.place}</TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>{row?.auditorium}</TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>{row?.startTime}</TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>{row?.endTime}</TableCell>
              {!disabled && 
              <TableCell sx={{margin: "0 auto"}} width={90}>
                    <Button sx={{backgroundColor: "red"}} >Жаңыртуу</Button>
                </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


