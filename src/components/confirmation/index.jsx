"use client"
import React, { useEffect } from 'react'
import { Alert, Button, Typography } from "@mui/material";
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import { useRouter } from "next/navigation";
import {  useDispatch, useSelector } from "react-redux";
import { fetchStudentStatusInClub } from '../../store/actions/fetchStudentStatusInClub'
import $api from '../../utils/api'
import Cookies from 'js-cookie';

export default function Confirmation (props) {
  const router = useRouter()
  const {getItem, setItem} = useLocalStorage('account');
  const selectedClub = useSelector((state) => state.selectedClub.value.name)
  const selectedClubId = useSelector((state) => state.selectedClub.value.id)
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.studentStatusInClub)
  const userEmail = Cookies.get("user")
  const userId = Cookies.get("userId")
  async function Confirm(){
    
    let response = undefined;
    
      response = await $api.post('/Club/Apply', {
        User: userEmail,
        Club: selectedClub
      });

      if(response.status = 200){
        <Alert variant="filled" severity="success">
            Сиздин ${selectedClub} клубуна табыштамаңыз жеткирилди.
        </Alert>
        router.push('/user');
      }
      <Alert variant="filled" severity="error">
        Сиздин табыштамаңыз жеткирилген жок.
      </Alert>
      router.push('/user');
    

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
              sx={{color:'white', backgroundColor:"#370E8A"}}
              onClick={Confirm}>
                Ооба
            </Button>        
          </div>
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
      </div>
    )
  }
    
}