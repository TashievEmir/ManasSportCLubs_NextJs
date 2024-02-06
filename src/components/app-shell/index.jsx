"use client"
import React, {useState} from 'react'
import Header from '../header/Header';
import Sidebar from '../izatSideBar/sidebar';
import { Box, MenuItem, Select } from '@mui/material';


export default function AppShell ({children}) {
    const [opened, setOpened] = useState(true)

      const changeSidebar = () => {
        setOpened(prev => !prev)
      }
  return (
    <Box sx={{height: "100vh", overflow: "hidden"}}>
        <Header state={opened} toggleDrawer={changeSidebar}/>
        
        <main style={{ 
          display: 'flex',
           justifyContent: 'flex-start',
            alignItems: 'start'}}>
          <Box
            sx={{
              width: opened ? "700px" : "80px",
              transition: "300ms",
              height: "90vh",
              maxWidth: "16%"
            }}>
            <Sidebar open={opened} setOpened={changeSidebar}/>
          </Box>
          <Box sx={{
                  padding: "15px",
                  height: "90vh",
                  overflow: "hidden",
                  marginX: "10px",
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                  borderRadius: "20px",
                  overflowY: "scroll",
                  width: "100%"
                }}>
                    
                  <Box sx={{ padding: '15px', borderRadius: "20px", bgcolor: 'rgba(217, 217, 217, 0.5)'}}>
                  {children}
                </Box>
          </Box>
        </main>
    </Box>
  )
}
