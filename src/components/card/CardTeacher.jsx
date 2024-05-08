"use client"
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import { Box, Grid } from '@mui/material';
import Cookies from 'js-cookie';

export default function MediaCard( {element} ) {
  const accountRole = Cookies.get("role");

  async function Remove(){
    const response = await $api.delete(`/Teacher/Remove/${element.id}`);

    if(response.status == 200){
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }

  }

  return (
    <Card sx={{ 
        minWidth: 100,
        maxWidth:500, 
        minHeight: 100, 
        maxHeight:208, 
        borderRadius: "20px" 
      }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4} >
              {element?.photo?.length > 1000 ? (
              <img
                width="100%"
                height="100%"
                src={`data:image/png;base64,${element.photo}`} 
                alt='Агай сүрөтү'
                style={{ borderRadius: "10px"}}
              />
            ) : (
                <img
                width="100%"
                height="100%"
                src={manasLogo} 
                alt='manasLogo'
                style={{ minWidth: "80px"}}
              />
            )}
            </Grid>
          <Grid item xs={8}>
            <Typography lineHeight={1} fontSize={{xs: "16px", md: "18px"}} gutterBottom variant="h6" component="div">
              {element.lastName}
            </Typography>
            <Typography lineHeight={1}  fontSize={{xs: "16px", md: "18px"}} gutterBottom variant="h6" component="div">
              {element.firstName}
            </Typography>
            <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word"}} variant="body2" color="text.secondary">
              {element.email}
           </Typography>
          </Grid>
        </Grid>
        {
          accountRole === "admin" &&
          <Button type='submit'           
            variant='contained' 
            sx={{marginTop:2, backgroundColor: '#370E8A', color: "white"}}
            onClick={Remove}>Агайды өчүрүү
        </Button>
        }
      </CardContent>
    </Card>
  );
}
