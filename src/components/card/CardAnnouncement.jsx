"use client"
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import { Box, Grid } from '@mui/material';
import Cookies from 'js-cookie';
import AlertComp from '../AlertComp/AlertComp';
import $api from "../../utils/api"
import { useRouter } from 'next/navigation'

export default function MediaCard( {element, setRender} ) {

  const accountRole = Cookies.get("role");
  const [showAlert, setShowAlert] = useState(null);
  const router = useRouter();

  async function Remove(){
    try
    {
      const announcementId = element.id;
      let response = await $api.delete(`/Announcement/Delete/${announcementId}`);
      setShowAlert(true);
      setRender(prev => !prev)
    }
    catch
    {
      setShowAlert(false)
    }
  }


  return (
    <Card  sx={{ width: "100%", borderRadius: "20px"}}>
      <CardContent>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} >
              <Box src={manasLogo} sx={{ width:'100%', height:'100%'}}>
                {element.photo.length > 1000 ? (
                  <img
                    width="100%"
                    height="auto"
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
          <Grid item xs={12} sm={7} sx={{padding: "20px 0"}}>
              <Box sx={{
                  display: "flex", 
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  flexWrap: "wrap"
                }}>
                  
                  <Typography variant="h5" component="div">
                    {element.title}
                  </Typography>
                  {
                    accountRole === "admin" &&
                    <Button type='submit'           
                      variant='contained' 
                      sx={{backgroundColor: '#370E8A', color: "white", ':hover':{backgroundColor:"#8855ED"}}}
                      onClick={Remove}>Жарыя өчүрүү
                  </Button>
                  }
              </Box>
              <Typography variant="body2" color="text.secondary">
                {element.description }
              </Typography>
              
          </Grid>
        </Grid>
        {showAlert !== null && 
        <AlertComp 
        isSuccess={showAlert}
         message={ showAlert ===true ? `Жарыя өчүрүлдү`: "Жарыя өчүрүлбөй калды"}/>} 
      </CardContent>
    </Card>
  );
}
