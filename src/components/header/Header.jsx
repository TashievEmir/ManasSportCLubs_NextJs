'use client'
import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import manasLogo from '../../../public/manas_logo.png'
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch, useSelector } from 'react-redux'
import { fetchClubs } from '../../store/actions/fetchClubs'
import { FormControl, InputLabel, Select } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import {setSelectedClub} from '../../store/slices/selectedClub';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import {setLoginStatus} from '../../store/slices/loginStatus';

function Header({toggleDrawer, state}) {
  const router = useRouter()

  const {getItem} = useLocalStorage('account');
  const account = getItem();

  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.club)
  const selectedClub = useSelector((state) => state.selectedClub.value)
  const loginStatus = useSelector((state) => state.loginStatus.value);
  
  const [club, setClub] = React.useState('');

  useEffect( () =>{
    dispatch(fetchClubs())
    setClub(selectedClub.id)
  }, [])

  useEffect(() => {
  }, [club])

  const handleChange = (event) => 
  {
    if(loginStatus){
      const selectedId = event.target.value;
      const selectedName = [...data].find(option => option.id === selectedId)?.name || '';

      setClub(selectedId)

      dispatch(setSelectedClub({
        id: selectedId,
        name: selectedName
      }))

      account.role == "teacher" ? router.push('/admin') : router.push('/user')
    }
    else{
      alert("At first you need to login") 
    }
  };

  function Login()
  {
    if(loginStatus)
    {
      setLoginStatus(false)
      router.push("/signin")
    }

    router.push("/signin")
  }
  return (
    <AppBar  open={state} position="sticky" sx={{mb: 2, bgcolor: '#370E8A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{}} >
          <Button onClick={toggleDrawer} sx={{color: 'white'}}>
              <WidgetsIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Button>         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Link  href="/user">
              <Image width={60} src={manasLogo} priority alt="manas logo" sx={{my:5}}/>
            </Link>
            <FormControl sx={{width: "15%" }}>
            <InputLabel sx={{color:"white"}} id="demo-simple-select-label">Клуб</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={club}
                label="Клуб"
                onChange={handleChange}
                sx={{ border: "1px solid white", color:"white",
                      boxShadow: "none",
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      }
                   }}
              >
                {
                [...data].map((el) => (
                  <MenuItem sx={{ backgroundColor: "white", "&:focus": {
                    backgroundColor: "white"
                  }, "&:hover": {
                    backgroundColor: "#8855ED",
                    color:"white"
                  }
                                }} key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))
                }
              </Select>
              </FormControl>
            <Link  href="/teacher">
              <Typography sx={{color: "white", fontWeight:"bold"}}>Агайлар</Typography>
            </Link>
          </Box>
          {
            loginStatus ? (
              <Button color="inherit" onClick={Login}>LogOut</Button>
            ) : (
              <Button color="inherit" onClick={Login}>Login</Button>
            )
          }
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
