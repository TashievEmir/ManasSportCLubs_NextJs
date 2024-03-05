"use client"
import React, { useEffect } from 'react';
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

function CardApprove({element}) {

  async function Approve(){
    const response = await $api.put(`/Club/ApproveStudent`,{
      Email : element.email
    });

    if(response.status == 200){
      alert(`${element.lastName} ${element.firstName} клубга кабыл алынды`)
    }
  }

  async function Reject(){
    const response = await $api.delete(`/Club/RejectStudent/${element.email}`);

    if(response.status == 200){
      alert(`${element.lastName} ${element.firstName} клубга кабыл алынган жок`)
    }
  }

  return (
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent sx={{gap:3}}>
      <Grid container justifyContent="space-between" spacing={4}>
          <Grid item xs={3}>
            <Image
              width={100}
              height={100}
              src={manasLogo} 
              alt='manasLogo'
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
            sx={{marginTop:2, marginLeft: 2, backgroundColor: '#370E8A', color: "white"}}>Кабыл алуу</Button>
        <Button type='submit'           
            variant='contained'
            onClick={Reject} 
            sx={{marginTop:2, marginLeft: 2, backgroundColor: '#370E8A', color: "white"}}>Кабыл албоо</Button>
        </Box>
        
      </CardContent>
    </Card>
  )
}

export default CardApprove