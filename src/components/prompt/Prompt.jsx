"use client"
import React, {useState} from 'react'
import {Box, Button, Grid, Modal } from '@mui/material'
import AlertComp from '../AlertComp/AlertComp'
import $api from '../../utils/api'
import { useRouter } from 'next/navigation'

function Prompt({email}) {
  console.log(email)
  const [value, setValue] = useState("")
  const [showAlert, setShowAlert] = useState({isSuccess: null})
  const router = useRouter()
  const handleVerify = (code) => async () => {
    try 
    {
      const verifyEmailResponse = await $api.post('/Account/VerifyEmail',{
        Email:  email,
        Code: code
      });
      setShowAlert({isSuccess: true})
      router.push("/signin")
    } 
    catch (error) 
    {
      console.log(error)
      setShowAlert({isSuccess: false})
    }
  }
  return (
       <>
        <Modal open={true} sx={{top: "40%", left: "40%", }}>
          <Box sx={{
              padding: "40px 16px", 
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "370px"
            }}>
            <Grid sx={{
                width: "100%",
               display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "end"}}>
              <Grid sx={{width: "100%"}} item xs={12}>
                <input
                  style={{
                    width: "100%",
                    padding: "16px 16px",
                    boxShadow: "0 0 10px 5px rgba(0,0,0,0.2)",
                    border: "none",
                    outline: "none"
                  }}
                  placeholder='Почтаңызга жөнөтүлгөн кодду жазыңыз'
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </Grid>
              <Grid item sx={12} style={{marginLeft:"20px"}}>
              <Button 
                onClick={handleVerify(value)}
                component="span" 
                variant="contained"
                sx={{backgroundColor:"#370E8A", ':hover':{backgroundColor:"#8855ED"}}}>
                Жөнөтүү
                        </Button>
              </Grid>
            </Grid>
          </Box>
          
        </Modal>
        {showAlert.isSuccess !== null 
          && <AlertComp
              isSuccess={showAlert.isSuccess}
              message={ showAlert.isSuccess === true ?
           `Каттоо ийгиликтүү аяктады`: "Каттоо учурунда ката чыгып калды"}/>}
       </>
  )
}

export default Prompt