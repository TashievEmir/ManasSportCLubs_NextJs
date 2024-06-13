"use client"
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import Image from 'next/image'
import { Box, Grid } from '@mui/material';
import $api from '../../utils/api'
import AlertComp from '../AlertComp/AlertComp'
import Cookies from 'js-cookie';

function CardApprove({setRenderState, element, selectedClub}) {

  const [showAlert, setShowAlert] = useState(null);
  const accountRole = Cookies.get('role');

  async function Approve(){
    const response = await $api.put(`/Club/ApproveStudent`,{
      Email : element.email,
      ClubId: selectedClub
    });

    if(response.status == 200){
      setRenderState(prev => !prev)
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }
  }

  async function Reject(){
    const response = await $api.delete(`/Club/RejectStudent/${element.email}?clubId=${selectedClub}`);
    if(response.status == 200){
      setRenderState(prev => !prev)
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }
  }

  return (
    <Card sx={{ minWidth: 200, maxWidth:600, maxHeight: 400,minHeight: 210, borderRadius: "20px" }}>
      <CardContent sx={{gap:3}}>
      <Grid container justifyContent="start" spacing={1}>
          <Grid justifyContent="start" item xs={4}>
            <img
              width="100%"
              height="100%" 
              src={`data:image/png;base64,${element.photo}`} 
              alt=''
              style={{borderRadius:"10px", objectFit: "contain"}}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h6" component="div">
              {element.lastName}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {element.firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.email}          
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{gap:3, justifyContent:"space-between"}}>
        <Button type='submit'           
            variant='contained'
            onClick={Approve} 
            sx={{marginTop:2, 
                marginLeft: 2, 
                backgroundColor: '#370E8A', 
                color: "white", 
                ':hover':{ 
                    backgroundColor: '#8855ED'
                  }
                }}>Кабыл алуу</Button>
        <Button type='submit'           
            variant='contained'
            onClick={Reject} 
            sx={{marginTop:2, 
                marginLeft: 2, 
                backgroundColor: '#370E8A', 
                color: "white",
                ':hover':{ 
                    backgroundColor: '#8855ED'
                  }
                }}>Кабыл албоо</Button>
        </Box>
        {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубга кабыл алынды`: "Клубга кабыл алынган жок"}/>}
      </CardContent>
    </Card>
  )
}

export default CardApprove