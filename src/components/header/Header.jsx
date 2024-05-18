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
import { FormControl, Grid, InputLabel, Popover, Select } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import {setSelectedClub} from '../../store/slices/selectedClub';
import { useRouter } from 'next/navigation';
//import {setLoginStatus} from '../../store/slices/loginStatus';
import Cookies from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import { setLoginStatus } from '../../store/slices/loginStatus';
function Header({toggleDrawer, state}) {
  const router = useRouter()

  //const {getItem: getLoginStatus, setItem: setLoginStatus} = useLocalStorage('login');
  const accountRole = Cookies.get("role");
  const loginStatus = Cookies.get("login");
  
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.club)
  const selectedClub = useSelector((state) => state.selectedClub.value)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      Cookies.set('login', false);
      dispatch(setLoginStatus({payload: false}))
      dispatch(setSelectedClub({payload: {}}))
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
            
            <Link style={{display: (accountRole !== "admin" && accountRole !== "teacher") 
             ? "block" : "none"}}  href="/teacher">
            <Typography sx={{color: "white", fontWeight:"bold"}}>
              Машыктыруучулар
            </Typography>
          </Link>
        
              <div style={{display: (accountRole === "admin" || accountRole === "teacher")
               ? "block" : "none" }}>
              <Button aria-describedby={id} 
                  sx={{ background: "#370E8A",
                        ':hover':{
                          backgroundColor: '#8855ED'
                        },
                        fontWeight:"bold",
                        color:"white",
                        padding:"5px"
                    }} 
                       
                      onClick={handleClick}>
                Menu
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                  <Box sx={{display: "flex", flexDirection: "column", gap: "10px", padding: "12px",
                   backgroundColor:"#8855ED", textAlign:"center", borderRadius:"10px"}}>
                    <Link  href="/teacher"
                           sx={{}}>
                      <Typography sx={{color: "white", fontWeight:"bold", ':hover':{
                        backgroundColor: "#370E8A", borderRadius:"7px"}, padding:"5px"}}>
                          Машыктыруучулар
                          </Typography>
                    </Link>
                    <Link  href="/admin/clubCreate">
                        <Typography sx={{color: "white", fontWeight:"bold", ':hover':
                        {backgroundColor: "#370E8A", borderRadius:"7px"}, padding:"5px"}}>
                          Клуб жаратуу
                          </Typography>
                    </Link>
                    <Link  href="/admin/announcement">
                      <Typography sx={{color: "white", fontWeight:"bold", ':hover':{backgroundColor: "#370E8A",
                       borderRadius:"7px"}, padding:"6px"}}>
                        Жарыя жаратуу
                        </Typography>
                    </Link>
                  </Box>
              </Popover>
              </div>
          </Box>
          <Box sx={{display: "flex", gap: 1}}>
              <Button sx={{':hover':{ 
                    backgroundColor: '#8855ED',
                    display: {sm: "none", md: "block"},
                    fontWeight:"bold" 
                  }}}
                color="inherit" 
                onClick={Login}
              >
                {loginStatus ? "Чыгуу" : "Кирүү"}
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
