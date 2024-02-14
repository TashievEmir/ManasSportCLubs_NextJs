"use client"
import { Box, Button, Container, CssBaseline, Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import manasLogo from '../../../../public/manas_logo.png'
import AppShell from '../../../components/app-shell'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import $api from '../../../utils/api'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const defaultTheme = createTheme();

function Announcement() {
    const [selectedFile, setSelectedFile] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const response = await $api.post('/club/Create',{
          ClubName: data.get('clubName'),
          Teacher: data.get('teacher'),
          Description: data.get('description')
        });

        if(response.status==200){
          router.push('/signin');
        }

      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };

  return (
    <AppShell>
        <Grid container justifyContent="center" alignItems="center" gap={2}>
        <ThemeProvider theme={defaultTheme} >
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"white",
            borderRadius: "20px"
          }}
            >
          <Image
            width={80}
            src={manasLogo} 
            alt='manas logo' 
            style={{ m: 1, bgcolor: 'secondary.main' }} />

          <Typography component="h1" variant="h5" sx={{marginBottom: 2, marginTop:2}}>
            Жаңылык жаратуу
          </Typography>
          <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{display:"flex", gap: 3}}>
                    <div>
                        <Typography variant="h6">Upload Photo:</Typography>
                        <Input
                            type="file"
                            inputProps={{ accept: 'image/*' }}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="photoInput"
                            />
                            <label htmlFor="photoInput">
                                <Button component="span" fullWidth variant="contained">
                                 Choose File
                                </Button>
                            </label>
                    </div>
                    <div>
                        {selectedFile && (
                                <div>
                                    <Typography>Selected Photo:</Typography>
                                    <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '50%' }} />
                                </div>
                        )}
                    </div>
                    
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="announcementName"
                    required
                    fullWidth
                    id="announcementName"
                    label="Жаңылык Башы"
                    autoFocus
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Сыпаттоо"
                    name="description"
                    autoComplete="description-name"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Дата тандаңыз" />
                    </DemoContainer>
                </LocalizationProvider>
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Жаратуу
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
        </Grid>
    </AppShell>
  )
}

export default Announcement