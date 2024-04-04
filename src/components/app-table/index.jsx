import * as React from 'react';
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

export default function AppTable({
    cols,
    rows,
    disabled
}) {

  const [showAlert, setShowAlert] = useState(null);

  async function Upgrade(){

    let response = await $api.post('/Club/Apply', {
      User: userEmail,
      Club: selectedClub
    });

    if(response.status == 200){
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }

  }

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
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>
                {
                  !disabled ?
                  <TextField id="outlined-basic" label={row?.place} variant="outlined" />
                   : <>{row?.place}</>
                }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>
              {
                !disabled ?
                <TextField id="outlined-basic" label={row?.auditorium} variant="outlined" />
                :<>{row?.auditorium}</>
              }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>
              {
                !disabled ?
                <TextField id="outlined-basic" label={row?.startTime} variant="outlined" />
                :<>{row?.startTime}</>
              }
              </TableCell>
              <TableCell sx={{textAlign: "center", fontWeight: "bold"}} width={90}>
              {
                !disabled ?
                <TextField id="outlined-basic" label={row?.endTime} variant="outlined" />
                :<>{row?.endTime}</>
              }
              </TableCell>
              {!disabled && 
                <TableCell sx={{margin: "0 auto"}} width={90}>
                    <Button sx={{backgroundColor: "red"}} onClick={Upgrade} > Жаңыртуу </Button>
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубга кабыл алынды`: "Клубга кабыл алынган жок"}/>}
    </TableContainer>
  );
}


