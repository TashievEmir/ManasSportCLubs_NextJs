"use client"
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import Image from 'next/image'
import { Alert, Grid } from '@mui/material';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import $api from '../../utils/api'
import AlertComp from '../AlertComp/AlertComp';

export default function CardMember( {element} ) {
  const {getItem, setItem} = useLocalStorage('account');
  const account = getItem()
  const [showAlert, setShowAlert] = useState(null);

  async function Remove(){
    const response = await $api.delete(`/Club/RemoveStudent/${element.email}`);

    if(response.status == 200){
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }
    
  }


  return (
    <Card sx={{ minWidth: 200, maxWidth:400, maxHeight: 300, borderRadius: "20px" }}>
      <CardContent sx={{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'}} >
        <Grid container spacing={2}>
          <Grid item xs={4}>
          { element?.photo?.length > 1000 ? (
            <img
            width={100}
            height={100}
            style={{width: "100%", height: "100%", borderRadius:"15px"}}
            src={`data:image/png;base64,${element.photo}`} 
            alt='manasLogo'
          />
          ):(
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
        {
          account.role === "teacher" ?(
            <Button type='submit'           
            variant='contained' 
            sx={{marginTop:2, backgroundColor: '#370E8A', color: "white"}}
            onClick={Remove}>
              Клубтан чыгаруу
          </Button>
          ):(<></>)
          
        }
        {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубдан чыгарылды`: "Клубдан чыгарылган жок"}/>}
      </CardContent>
    </Card>
  );
}
