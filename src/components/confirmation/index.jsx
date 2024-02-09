import { Button, Typography } from "@mui/material";


export default function Confirmation () {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
        <Typography sx={{ textAlign: "center", fontSize:"100px" }}>
              клубуна каталууга макулсузбу?
        </Typography>
        <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px'}}>
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