import React from 'react'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import { Grid } from '@mui/material'
const Users = () => {
  return (
    <div>
      <Header/>
      <main style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start' }}>
        <div style={{marginRight: '20px'}}>
          <SideBar/>
        </div>
        <Grid container justifyContent="start" alignItems="start" gap={2}>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
          <Grid item>
            <Card/>
          </Grid>
        </Grid>
      </main>
      <Footer/>
    </div>
  )
}

export default Users