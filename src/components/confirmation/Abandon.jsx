"use client"
import React, { useEffect, useState } from 'react'
import { Alert, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {  useDispatch, useSelector } from "react-redux";
import { fetchStudentStatusInClub } from '../../store/actions/fetchStudentStatusInClub'
import $api from '../../utils/api'
import Cookies from 'js-cookie';
import AlertComp from '../AlertComp/AlertComp';

function Abandon() {
    const router = useRouter()
    const selectedClub = useSelector((state) => state.selectedClub.value.name)
    const selectedClubId = useSelector((state) => state.selectedClub.value.id)
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.studentStatusInClub)
    const userEmail = Cookies.get("user")
    const userId = Cookies.get("userId")
    const [showAlert, setShowAlert] = useState(null);

    useEffect(() => {
      dispatch(fetchStudentStatusInClub({userId: userId, clubId: selectedClubId}))
    }, [])

    async function Confirm(){
      
      let response = undefined;
  
        const requestData = {
          User: userEmail,
          Club: selectedClub
        };
  
        response = await $api.delete('/Club/Abandon', { data: requestData });
        
        if(response.status == 200){
          setShowAlert(true)
        }
        else{
          setShowAlert(false)
        }
    }

    if(data === "")
    {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
                  <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
                    {
                        selectedClub === undefined ? "Биринчи клуб тандаңыз" :`${selectedClub} клубуна табыштама жөнөтө элексиз!`
                    }        
                  </Typography>
                  <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px', gap:'4%'}}>       
                  </div>
              </div>
          )
    }
    else
    {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
                  <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
                    {
                        selectedClub === undefined ? "Биринчи клуб тандаңыз" :`${selectedClub} клубунан баш тартууга макулсузбу?`
                    }
                  </Typography>
                  <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px', gap:'4%'}}>
                    {
                      selectedClub !== undefined ?
                      <Button
                      type='submit'           
                      variant='contained'
                      sx={{color:'white', backgroundColor:"#370E8A"}}
                      onClick={Confirm}>
                        Ооба
                    </Button>
                    : <></>
                    }
                   {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубдан баш тартылды`: "Клубдан баш тартылган жок"}/>}         
                  </div>
              </div>
          )
    }
  
}

export default Abandon