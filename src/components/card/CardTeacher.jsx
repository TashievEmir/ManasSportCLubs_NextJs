"use client"
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';

export default function MediaCard( {element} ) {
  const {getItem, setItem} = useLocalStorage('account');
  const account = getItem()

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
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent width="200px">
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item xs={4} >
              {element?.photo?.length > 1000 ? (
              <Image
                width={100}
                height={100}
                src={`data:image/png;base64,${element.photo}`} 
                alt='Агай сүрөтү'
                style={{width: "100%", height: "100%", borderRadius: "10px"}}
              />
            ) : (
                <Image
                width='200px'
                height='200px'
                src={manasLogo} 
                alt='manasLogo'
                style={{width: "100%", height: "100%", minWidth: "80px"}}
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
            <Typography fontSize={{xs: "12px", md: "14px"}} variant="body2" color="text.secondary">
              {element.email}
          
           </Typography>
          </Grid>
        </Grid>
        {
          account.role === "admin" ??
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
