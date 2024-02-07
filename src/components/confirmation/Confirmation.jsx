import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
function Confirmation() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"red", borderRadius:"10px", padding:'50px' }}>
        <Typography sx={{ textAlign: "center", fontSize:"100px" }}>
              клубуна каталууга макулсузбу?
        </Typography>
        <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'30px'}}>
          <Button
            type='submit'           
            variant='contained'
            sx={{color:'white', backgroundColor:"#370E8A"}}>
              Ооба
          </Button>
          <Button
            type='submit'           
            variant='contained'
            sx={{color:'white', backgroundColor:"#370E8A"}}>
              Жок
          </Button>
        </div>
        
    </div>
  )
}

export default Confirmation