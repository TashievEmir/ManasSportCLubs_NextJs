"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
const defaultTheme = createTheme();

export default function ResetPassword(){
    const router = useRouter();
    const handleButtonClick = () => {
        router.push('/signin');
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    return(
    <div>
            <Typography component="h1" variant="h5">
              Сиздин паролуңуз ийгиликтүү жаңыланды!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Button
                  
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleButtonClick}
                >
                  Тастыктоо
                </Button>
            </Box>
    </div>
    )
}
