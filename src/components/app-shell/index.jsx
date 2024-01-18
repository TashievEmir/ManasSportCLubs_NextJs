"use client"
import React, {useState} from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/SideBar';
import Footer from '../footer/Footer'
import { Box } from '@mui/material';


export default function AppShell ({children}) {
    const [state, setState] = useState({
        left: false,
      });
      const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ left: open });
      };

  return (
    <>
        <Header state={state} toggleDrawer={toggleDrawer(true)}/>
        <main style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start' }}>
        <Sidebar toggleDrawer={toggleDrawer} state={state}/>
            <Box sx={{p: "50px"}}>
                {children}
            </Box>
        </main>
        <Footer/> 
    </>
  )
}
