"use client"
import { Alert, Box, Button, Container, CssBaseline, Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material'
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
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation'
import AlertComp from '../../../components/AlertComp/AlertComp'

const defaultTheme = createTheme();

function Announcement() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState();
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [showAlert, setShowAlert] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    data.append('Photo', selectedFile)
    const response = await $api({
      method: 'post',
      url: '/announcement/Create',
      data: {
        Title: data.get("announcementName"),
        Description: data.get("description"),
        CreationDate: selectedDate,
        Photo: selectedFile
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });


    if (response.status == 200) {
      setShowAlert(true)
      router.push("/")
    }
    setShowAlert(false)
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <AppShell showSidebar={false}>
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
                backgroundColor: "white",
                borderRadius: "20px"
              }}
            >
              <Image
                width={80}
                src={manasLogo}
                alt='manas logo'
                style={{ m: 1, bgcolor: 'secondary.main' }} />

              <Typography component="h1" variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
                Жарыя жаратуу
              </Typography>
              <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ display: "flex", gap: 3 }}> 
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="given-name"
                      name="announcementName"
                      required
                      fullWidth
                      id="announcementName"
                      label="Жарыя Башы"
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
                        <DatePicker label="Дата тандаңыз" value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                  <div>
                      <Typography variant="h6">Жарыянын сүрөтүн жүктөңүз:</Typography>
                      <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="photoInput"
                      />
                      <label htmlFor="photoInput">
                        <Button component="span" fullWidth variant="contained" style={{backgroundColor: '#370E8A', color: "white"}}>
                         Файл тандоо
                        </Button>
                      </label>
                    </div>
                    <div>
                      {selectedFile && (
                        <div>
                          <Typography>Тандалган сүрөт:</Typography>
                          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '50%' }} />
                        </div>
                      )}
                    </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#370E8A', color: "white",'&:hover': {
                                                                                          backgroundColor: '#8855ED', 
                                                                                          cursor: 'pointer',} 
                  }}
                >
                  Жаратуу
                </Button>
              </form>
            </Box>
          </Container>
        </ThemeProvider>
        {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Расписание жаңыланды`: "Расписание жаңыланды"}/>}
      </Grid>
    </AppShell>
  )
}

export default Announcement