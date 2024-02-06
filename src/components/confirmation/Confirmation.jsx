import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'

function Confirmation(props) {
  return (
    <div style={{display:"flex", justifyContent: "center", alignItmes:"center"}}>
        <Typography>
             {props.clubName} клубуна каталууга макулсузбу?
        </Typography>
        <Button>
            Ооба
        </Button>
        <Button>
            Жок
        </Button>
    </div>
  )
}

export default Confirmation