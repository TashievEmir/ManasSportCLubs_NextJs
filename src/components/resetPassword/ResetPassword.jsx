"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function ResetPassword({setComponent}){
  const handleSubmit = (event) => {
    if(true){
      setComponent('NewPasswordDone')
    }
  };
    return(
    <div>
            <Typography component="h1" variant="h5">
              Жаңы пароль түзүңүз
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="newPassword"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="repeatPassword"
                label="Repeat Password"
                name="repeatPassword"
                autoComplete="repeatPassword"
                autoFocus
              />    
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Тастыктоо
              </Button>
              <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                Парольду эстедим
                </Link>
              </Grid>
            </Grid>
            </Box>
    </div>
    )
}
