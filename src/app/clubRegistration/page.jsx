"use client"
import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AppShell from '../../components/app-shell'
import Image from 'next/image'
import manasLogo from '../../../public/manas_logo.png'

const defaultTheme = createTheme();

const ClubRegistration = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await $api.post('/Account/Register',{
      LastName: data.get('lastName'),
      FirstName: data.get('firstName'),
      Email: data.get('email'),
      Password: data.get('password'),
      RepeatedPassword: data.get('repeatPassword'),
      Phone: data.get('telefon'),
      Faculty: data.get('faculty'),
      Department: data.get('department')
    });
    if(response.status==200){
      router.push('/signin');
    }

  };


  return (
    <AppShell>
      <Grid container justifyContent="start" alignItems="start" gap={2}>
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            width={80}
            src={manasLogo} 
            alt='manas logo' 
            style={{ m: 1, bgcolor: 'secondary.main' }} />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Атыныз"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилияныз"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <Select
                    value={state.faculty}
                    onChange={(value) => setState({...state, faculty: value.target.value})}
                    required
                    fullWidth
                    id="faculty"
                    name="faculty"
                    autoComplete="faculty-name"
                  >
                    {[{id: 777, name: "Факультет тандаңыз"}, ...faculties].map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                </Grid>
                <Grid item xs={12} >
                {/* <Select
                    value={state.departament}
                    onChange={(value) => setState({...state, departament: value.target.value})}
                    required
                    fullWidth
                    id="department"
                    name="department"
                    autoComplete="department-name"
                  >
                    {[{id: 777, name: "Бөлүм тандаңыз"}, ...departaments].map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="telefon"
                    label="Телефон"
                    name="telefon"
                    autoComplete="telefon-name"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Манас почта"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Парольду кайталаныз"
                    type="password"
                    id="repeatPassword"
                    autoComplete="repeatPassword"
                  />
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Link href="/signin" >
            Аккаунт бар
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
      </Grid>
    </AppShell>
  )
}

export default ClubRegistration