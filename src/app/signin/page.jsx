"use client"
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import manasLogo from '../../../public/manas_logo.png'
import $api from '../../utils/api'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
//import {setLoginStatus} from '../../store/slices/loginStatus';
import { useDispatch, useSelector } from 'react-redux'

const defaultTheme = createTheme();

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {getItem: getLoginStatus, setItem: setLoginStatus} = useLocalStorage('login');

  const [account, setAccount] = useState();
  const {getItem, setItem} = useLocalStorage('account');

   const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const response = await $api.post('/Account/LogIn',{
          Login: data.get('email'),
          Password: data.get('password')
        });
        
        if(response.status == 200)
        {
          setItem(response.data)
          setLoginStatus(true)
          router.push("/")
        }
        else{
          alert("Something went wrong")
        }               
      };

  return (
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
            Кирүү
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Манас почта"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Мени жатта"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Кирүү
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2">
                  Парольду унутуңузбу?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Катталуу"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignIn