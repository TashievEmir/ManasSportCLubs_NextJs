"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function EmailCodeRequest({setComponent}){
  const handleSubmit = (event) => {
    if(true){
      setComponent('ResetPassword')
    }
  };
    return(
        <div>
            <Typography component="h1" variant="h5">
            Сиздин почтаңызга жөнөтүлгөн кодду жазыңыз
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Code"
              name="emcodeail"
              autoComplete="code"
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