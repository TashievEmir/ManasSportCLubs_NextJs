'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import $api from '../../utils/api'
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartament } from '../../store/actions/fetchDepartament';
import { fetchFaculties } from '../../store/actions/fetchFaculties';
import manasLogo from '../../../public/manas_logo.png'

const defaultTheme = createTheme();

const SignUp = observer(() => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    faculty: 777,
    departament: 777
  })

  useEffect(() => {
    dispatch(fetchDepartament())
    dispatch(fetchFaculties())
  }, [])
  
  const {faculties, departaments} = useSelector(s => s.facDeps)

  const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
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
                  <Select
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
                  </Select>
                </Grid>
                <Grid item xs={12} >
                <Select
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
                  </Select>
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
  )
})
export default SignUp


