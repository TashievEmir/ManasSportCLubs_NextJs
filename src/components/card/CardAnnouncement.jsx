"use client"
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { Box, Grid } from '@mui/material';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';

export default function MediaCard( {element} ) {
  const {getItem, setItem} = useLocalStorage('account');
  const account = getItem()

  async function Remove(){
    const response = await $api.delete(`/Announcement/Remove/${element.id}`);

    if(response.status == 200){
      setShowAlert(true)
    }
    else{
      setShowAlert(false)
    }

  }


  return (
    <Card sx={{ minWidth: 200, borderRadius: "20px" }}>
      <CardContent>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} >
          <Box src={manasLogo} sx={{ width:'100%', height:'100%'}}>
           {element.photo.length > 1000 ? (
            <img
              width="100%"
              height="100%"
              style={{objectFit: "contain"}}
              src={`data:image/png;base64,${element.photo}`} 
              alt='manasLogo'
            />
          ) : (
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img
              width="100%"
              height="100%"
              src={manasLogo} 
              alt='manasLogo'
          />
          </Box>
        )}
        </Box>
          </Grid>
          <Grid item xs={7}>
          <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
        {
          account.role === "admin" ??
          <Button type='submit'           
            variant='contained' 
            sx={{marginTop:2, backgroundColor: '#370E8A', color: "white"}}
            onClick={Remove}>Жарыя өчүрүү
        </Button>
        }
          </Grid>
        </Grid> 
      </CardContent>
    </Card>
  );
}
