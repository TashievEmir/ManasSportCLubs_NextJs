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
import Image from 'next/image'


function Header({toggleDrawer, state}) {

  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.club)

  const [club, setClub] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState({ id: '', name: '' });

  useEffect( () =>{
    dispatch(fetchClubs())
  }, [])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const selectedName = [...data].find(option => option.id === selectedId)?.name || '';
    setClub(selectedId)
    setSelectedOption({
      id: selectedId,
      name: selectedName
    })
    
  };

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
                sx={{borderColor: "white", color:"white"}}
              >
                {
                [...data].map((el) => (
                  <MenuItem sx={{ backgroundColor: "#8855ED"}} key={el.id} value={el.id}>
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
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
