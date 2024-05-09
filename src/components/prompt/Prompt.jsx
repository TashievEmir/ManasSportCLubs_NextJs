"use client"
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import AlertComp from '../AlertComp/AlertComp';
import Image from 'next/image';

function Prompt({handleVerify}) {

    const [showAlert, setShowAlert] = useState({isSuccess: null});


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
          <Box component="form" onSubmit={handleVerify} noValidate sx={{ mt: 1 }}>
            <Typography>Почтаңызга жөнөтүлгөн кодду жазыңыз: </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailCode"
              label="Почтадан код"
              name="emailCode"
              autoComplete="emailCode"
              autoFocus
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
          </Box>
        </Box>
        {(showAlert.isSuccess !== null) && 
        <AlertComp isSuccess={showAlert.isSuccess} 
          message={ showAlert.isSuccess ===true ? `Кирүү ийгиликтүү`: "Логин же пароль туура эмес"}/>}         
      </Container>
    </ThemeProvider>
  )
}

export default Prompt