"use client"
import * as React from 'react';
import {Avatar, CssBaseline, Box, } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {manasLogo} from '../../../public/manas_logo.png'
import EmailRequest from '../../components/resetPassword/EmailRequest';
import EmailCodeRequest from '../../components/resetPassword/EmailCodeRequest';
import ResetPassword from '../../components/resetPassword/ResetPassword';
import NewPasswordDone from '../../components/resetPassword/NewPasswordDone';

const defaultTheme = createTheme();

export default function ForgotPassword(){
    const [component, setComponent] = React.useState('EmailRequest')
    return(
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
          <Avatar src={manasLogo} alt='manas logo' sx={{ m: 1, bgcolor: 'secondary.main', height: 100, width:100 }} />           
          {component == 'EmailCodeRequest' && <EmailCodeRequest setComponent={setComponent}/>}
          {component == 'EmailRequest' && <EmailRequest setComponent={setComponent}/>} 
          {component == 'ResetPassword' && <ResetPassword setComponent={setComponent}/>}  
          {component == 'NewPasswordDone' && <NewPasswordDone setComponent={setComponent}/>}

        </Box>
      </Container>
    </ThemeProvider>
    )
}
