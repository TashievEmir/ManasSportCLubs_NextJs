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
//import {setLoginStatus} from '../../store/slices/loginStatus';
import Cookies from 'js-cookie';

function Header({toggleDrawer, state}) {
  const router = useRouter()

  const {getItem: getLoginStatus, setItem: setLoginStatus} = useLocalStorage('login');
  const accountRole = Cookies.get("role");
  const loginStatus = getLoginStatus();
  
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.club)
  const selectedClub = useSelector((state) => state.selectedClub.value)
  
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

      accountRole == "teacher" ? router.push('/admin') : router.push('/user')
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
      <Container maxWidth="100%">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}} disableGutters >
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} onClick={toggleDrawer}>
              <WidgetsIcon   sx={{color: 'white'}} />
          </Button>         
          <Box sx={{display: "flex", alignItems: "center", gap: {xs: 2, md: 5}}}>
            <Box>
              <FormControl fullWidth>
                <InputLabel
                id="demo-simple-select-label" sx={{color: "white"}}>Клуб</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={club}
                  label="Клуб"
                  onChange={handleChange}
                  sx={{ width: '140px', border: "1px outset white", color:"white"}}>
                  {
                  [...data].map((el) => (
                    <MenuItem  key={el.id} value={el.id}>
                      {el.name}
                    </MenuItem>
                  ))
                  }
                </Select>
              </FormControl>
            </Box>
            <Link  href="/">
              <Image width={60} src={manasLogo} priority alt="manas logo" sx={{my:5}}/>
            </Link>
            <Link  href="/teacher">
              <Typography sx={{color: "white", fontWeight:"bold"}}>Агайлар</Typography>
            </Link>
            {
              accountRole == "teacher" ? <Link  href="/admin/clubCreate">
                                            <Typography sx={{color: "white", fontWeight:"bold"}}>Клуб жаратуу</Typography>
                                          </Link>
                                          : <></>
            }
            {
              accountRole == "teacher" ? <Link  href="/admin/announcement">
                                            <Typography sx={{color: "white", fontWeight:"bold"}}>Жарыя жаратуу</Typography>
                                          </Link>
                                          : <></>
            }
            
          </Box>
          <Box sx={{display: "flex", gap: 1}}>
          {
            loginStatus ? (
              <Button sx={{fontSize: {xs: "12px", md: "14px"}}} color="inherit" onClick={Login}>LogOut</Button>
            ) : (
              <Button  sx={{fontSize: {xs: "12px", md: "14px"}}} color="inherit" onClick={Login}>Login</Button>
            )
          }
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
