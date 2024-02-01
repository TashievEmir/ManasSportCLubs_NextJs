'use client'
import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import manasLogo from '../../../public/manas_logo.png'
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch, useSelector } from 'react-redux'
import { fetchClubs } from '../../store/actions/fetchClubs'
import { Select } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image'

const pages = ['Клубтар', 'фывджаоыф'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header({toggleDrawer, state}) {
  
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.club)
  const [selected, setSelected] = useState("")
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

  useEffect(() => {
    if(data[0]){
      setSelected(data[0].id)
    }

  }, [data])
  return (
    <AppBar  open={state} position="sticky" sx={{mb: 2, bgcolor: '#370E8A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Button onClick={toggleDrawer} sx={{color: 'white'}}>
              <WidgetsIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Button>         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Link  href="/user">
              <Image width={60} src={manasLogo} priority alt="manas logo" sx={{my:5}}/>
            </Link>
            <Select sx={{color: "white"}} value={selected} onChange={(value) => setSelected(value)}>
              
              {
                [...data].map((el) => (
                  <MenuItem sx={{}} key={el.id} value={el.id}>
                    <Typography sx={{color:"white"}}>{el.name}</Typography>
                  </MenuItem>
                ))
              }
            </Select>
            <Link  href="/teacher">
              <Typography sx={{color: "white"}}>Агайлар</Typography>
            </Link>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
