"use client"
import React, { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import manasLogo from '../../../public/manas_logo.png'
import { Box, Grid } from '@mui/material';
import Cookies from 'js-cookie';
import $api from "../../utils/api"
import AlertComp from '../AlertComp/AlertComp';

export default function MediaCard( {element,setRender} ) {

  const accountRole = Cookies.get("role");
  const [showAlert, setShowAlert] = useState(null);

  async function Remove(){

    try
    {
      const response = await $api.delete(`/Teacher/Delete/${element.id}`);
      setShowAlert(true)
      setRender(prev => !prev)
    }
    catch
    {
      setShowAlert(false)
    }

  }

  return (
    <Card sx={{ 
        minWidth: 100,
        maxWidth:500, 
        minHeight: 100, 
        maxHeight:300, 
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
              {element.lastName} {element.firstName}
            </Typography>
            <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word"}} variant="body2" color="text.secondary">
              {element.email}
           </Typography>
           <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word", mt:"5px"}} variant="body2" color="text.secondary">
              {element.club}
           </Typography>
           <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word", mt:"5px"}} variant="body2" color="text.secondary">
              {element.faculty} факультет
           </Typography>
           <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word", mt:"5px"}} variant="body2" color="text.secondary">
              {element.department} бөлүмү
           </Typography>
           {
            accountRole === "admin" || accountRole === "teacher" ?
            <Typography fontSize={{xs: "12px", md: "14px"}} sx={{wordWrap: "break-word", mt:"5px"}} variant="body2" color="text.secondary">
              {element.phone}
            </Typography>
            :<></>
           }          
          </Grid>
        </Grid>
        {
          accountRole === "admin" &&
          <Button type='submit'           
            variant='contained' 
            sx={{marginTop:2, backgroundColor: '#370E8A', color: "white", ':hover':{backgroundColor:"#8855ED"}}}
            onClick={Remove}>Агайды өчүрүү
        </Button>
        }
      </CardContent>
      {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Агай өүрүлдү`: "Агай өчүрүлгөн жок"}/>}
    </Card>
  );
}
