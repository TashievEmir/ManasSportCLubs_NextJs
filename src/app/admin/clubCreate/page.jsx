"use client"
import { Alert, Box, Button, Container, CssBaseline, Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import manasLogo from '../../../../public/manas_logo.png'
import AppShell from '../../../components/app-shell'
import { fetchTeachers } from '../../../store/actions/fetchTeacher';
import { useDispatch, useSelector } from 'react-redux';
import $api from '../../../utils/api'
import { useRouter } from 'next/navigation'

const defaultTheme = createTheme();

function ClubCreate() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [selectedFile, setSelectedFile] = useState();

    const { data } = useSelector((state) => state.teacher)
    const [state, setState] = useState({
      teacher: 777
    })
  
    useEffect(() => {
      dispatch(fetchTeachers())
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        data.append('Photo', selectedFile)
        const response = await $api({
          method: 'post',
          url: '/club/Create',
          data: {
            Name: data.get('clubName'),
            Teacher: data.get('teacher'),
            Description: data.get('description'),
            Photo: selectedFile
          },
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        
        if(response.status==200){
          <Alert variant="filled" severity="success">
            Club has been created succesfully!
          </Alert>
          router.push("/admin")
        }
        <Alert variant="filled" severity="error">
          Club has not been created!
        </Alert>
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
            Клуб жаратуу
          </Typography>
          <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="clubName"
                    required
                    fullWidth
                    id="clubName"
                    label="Клуб Аты"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    value={state.teacher}
                    onChange={(value) => setState({...state, teacher: value.target.value})}
                    required
                    fullWidth
                    id="teacher"
                    name="teacher"
                    autoComplete="teacher-name"
                  >
                    {[{id: 777, name: "Агай тандаңыз"}, ...data].map(option => (
                      <MenuItem key={option.id} value={`${option.lastName} ${option.firstName}`}>
                        {option.name || `${option.lastName} ${option.firstName}` || 'Агай тандаңыз'}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Сыпаттоо"
                    name="description"
                    autoComplete="description-name"
                  />
                </Grid>
              </Grid>
              <div>
                      <Typography variant="h6">Клубдун сүрөтүн жүктөңүз:</Typography>
                      <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="photoInput"
                      />
                      <label htmlFor="photoInput">
                        <Button component="span" fullWidth variant="contained">
                        Файл тандоо
                        </Button>
                      </label>
                    </div>
                    <div>
                      {selectedFile && (
                        <div>
                          <Typography>Жүктөлгөн сүрөт:</Typography>
                          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '50%' }} />
                        </div>
                      )}
                    </div>
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

export default ClubCreate