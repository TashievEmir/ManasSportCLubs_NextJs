"use client"
import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import AlertComp from '../../components/AlertComp/AlertComp';

const defaultTheme = createTheme();

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [account, setAccount] = useState();

  const [showAlert, setShowAlert] = useState({isSuccess: null});

   const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setShowAlert({isSuccess: null})
        let response;
        try 
        {
          response = await $api.post('/Account/LogIn',{
            Login: data.get('email'),
            Password: data.get('password')
          });
          
          //setItem(response.data)
          const currentDate = new Date();
          const expiryDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));
          
          Cookies.set('userId', response.data.id, { expires: expiryDate });
          Cookies.set('accessToken', response.data.id, { expires: expiryDate });
          Cookies.set('user', response.data.user, { expires: expiryDate });
          Cookies.set('role', response.data.role, { expires: expiryDate });
          Cookies.set('login', true, { expires: expiryDate });
          
          setShowAlert({isSuccess: true})
          router.push("/")  

        } 
        catch (error) 
        {
          setShowAlert({isSuccess: false})
          console.error(`${error}`)
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

          <Typography component="h1" 
                      variant="h5"
                      >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                    mb: 2,
                    backgroundColor: '#370E8A',
                    ':hover':{
                      backgroundColor: '#8855ED'
                    }
                  }}
            >
              Кирүү
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="/forgotPassword" variant="body2">
                  Парольду унутуңузбу?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" sx={{ color: '#370E8A',
                                                        ':hover':{
                                                          color: '#8855ED'
                                                        }}}>
                  {"Катталуу"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {(showAlert.isSuccess !== null) && 
        <AlertComp isSuccess={showAlert.isSuccess} 
          message={ showAlert.isSuccess ===true ? `Кирүү ийгиликтүү`: "Логин же пароль туура эмес"}/>}         
      </Container>
    </ThemeProvider>
  )
}

export default SignIn