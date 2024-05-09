"use client"
import React, { useEffect, useState } from 'react'
import { Alert, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {  useDispatch, useSelector } from "react-redux";
import { fetchStudentStatusInClub } from '../../store/actions/fetchStudentStatusInClub'
import $api from '../../utils/api'
import Cookies from 'js-cookie';
import AlertComp from '../AlertComp/AlertComp';

export default function Confirmation (props) {

  const router = useRouter()
  const selectedClub = useSelector((state) => state.selectedClub.value.name)
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.studentStatusInClub)
  const userEmail = Cookies.get("user")
  const userId = Cookies.get("userId")
  const [showAlert, setShowAlert] = useState(null);

  async function Confirm(){
    
    let response;
    
    try
    {
      response = await $api.post('/Club/Apply', {
        User: userEmail,
        Club: selectedClub
      });
      
      setShowAlert(true)
        router.push('/user');
    }
    catch
    {
      setShowAlert(false)
    }

  }

  useEffect(() => {
    dispatch(fetchStudentStatusInClub({userId: userId, clubId: selectedClubId}))
  }, [])
  
  if(data === "")
  {
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
          <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
                { 
                  selectedClub === undefined ? "Биринчи клуб тандаңыз" : `${selectedClub} клубуна катталууга макулсузбу` 
                } 
          </Typography>
          <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px', gap:'4%'}}>
            <Button
              type='submit'           
              variant='contained'
              sx={{ color:'white', 
                    backgroundColor:"#370E8A",
                    ':hover':{
                      backgroundColor: '#8855ED'
                    }
                  }}
              onClick={Confirm}>
                Ооба
            </Button>        
          </div>
          {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубга катталдыңыз`: "Клубга катталган жоксуз"}/>}
      </div>
    )
  }
  else{
    return(
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
          <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
                { 
                  data.status === true ? `Сиз ${props.club} клубуна катталгансыз!` : `Сиз ${props.club} клубуна табыштама жөнөткөнсүз!`
                } 
          </Typography>
          <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px', gap:'4%'}}>
                 
          </div>
          {showAlert !== null && <AlertComp isSuccess={showAlert} message={ showAlert ===true ? `Клубга катталдыңыз`: "Клубга катталган жоксуз"}/>}
      </div>
    )
  }
    
}