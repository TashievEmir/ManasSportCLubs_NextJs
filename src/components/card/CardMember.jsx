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
import { Grid } from '@mui/material';
import $api from '../../utils/api'

export default function CardMember( {element} ) {

  async function Remove(){
    const response = await $api.delete(`/Club/RemoveStudent/${element.email}`);

    if(response.status == 200){
      <Alert variant="filled" severity="success">
            ${element.lastName} ${element.firstName} клубтан чыгарылды.
      </Alert>
    }
    <Alert variant="filled" severity="error">
      ${element.lastName} ${element.firstName} клубтан чыгарылган жок.
    </Alert>
  }


  return (
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent sx={{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'}} >
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
        <Button type='submit'           
            variant='contained' 
            sx={{marginTop:2, backgroundColor: '#370E8A', color: "white"}}
            onClick={Remove}>Клубтан чыгаруу</Button>
      </CardContent>
    </Card>
  );
}
