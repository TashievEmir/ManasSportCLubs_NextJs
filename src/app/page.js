"use client"
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '../components/header/Header'
import AppShell from '../components/app-shell';
import { Box, Grid } from '@mui/material';
import CardAnnouncement from '../components/card/CardAnnouncement';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnnouncements } from '../store/actions/fetchAnnouncements';
import Cookies from 'js-cookie';
import CardNoData from '../components/card/CardNoData'

const defaultTheme = createTheme();

export default function Home() {
  const [opened, setOpened] = useState(false)
  const changeSidebar = () => {
    setOpened(prev => prev)
  }
  const cookieValue = Cookies.get('name');
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.announcement)
  
  useEffect( () =>{
    dispatch(fetchAnnouncements())
  }, [])

  const dataCount = Array.isArray(data) ? data.length : 0;

  return (
    <div>
      <Header state={false} toggleDrawer={changeSidebar} />
      <Box sx={{
                  padding: "15px",
                  height: "90vh",
                  overflow: "hidden",
                  marginX: "auto",
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                  borderRadius: "20px",
                  overflowY: "scroll",
                  width: "98%"
                }} >
                    
                  <Box  display="flex" justifyContent="space-around" alignItems="start" flexWrap="wrap" sx={{ padding: '15px', borderRadius: "20px", bgcolor: 'rgba(217, 217, 217, 0.5)', gap:5}}>
                  {
                    dataCount > 0 ?
                    data?.map((element) =>
                      <Grid  sx={{width:"100%"}} key={element.id} item>
                        <CardAnnouncement element={element} />
                      </Grid>
                    ):
                    <CardNoData></CardNoData>
                    
                  }
                </Box>
          </Box>
    </div>
    
  )
}
