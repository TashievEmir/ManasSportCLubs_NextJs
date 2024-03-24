"use client"
import React, { useEffect } from 'react'
import { Alert, Button, Typography } from "@mui/material";
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import { useRouter } from "next/navigation";
import {  useDispatch, useSelector } from "react-redux";
import { fetchStudentStatusInClub } from '../../store/actions/fetchStudentStatusInClub'
import $api from '../../utils/api'

export default function Confirmation (props) {
  const router = useRouter()
  const {getItem, setItem} = useLocalStorage('account');
  const selectedClub = useSelector((state) => state.selectedClub.value.name)
  const dispatch = useDispatch()
  const {data} = useSelector((state)=> state.studentStatusInClub)

  async function Confirm(){
    const account = getItem()
    let response = undefined;

    if(props.action == true) {

      response = await $api.post('/Club/Apply', {
        User: account.user,
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
    else {

      const requestData = {
        User: account.user,
        Club: selectedClub
      };

      response = await $api.delete('/Club/Abandon', { data: requestData });

      if(response.status == 200){
        <Alert variant="filled" severity="success">
            Табыштамаңыз ${selectedClub} клубунан баш тартылды.
        </Alert>
        router.push('/user');
      }
      <Alert variant="filled" severity="error">
        Сиздин табыштамаңыз жеткирилген жок.
      </Alert>
    }

  }

  useEffect(() => {
    dispatch(fetchStudentStatusInClub())
  }, [])


  console.log(data)  
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
        <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
              { 
                props.action ? `${props.club} клубуна каталууга макулсузбу?` : `${props.club} клубунан баш тартууга макулсузбу?`
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