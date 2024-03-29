"use client"
import React, { useEffect } from 'react'
import { Alert, Button, Typography } from "@mui/material";
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import { useRouter } from "next/navigation";
import {  useDispatch, useSelector } from "react-redux";
import { fetchStudentStatusInClub } from '../../store/actions/fetchStudentStatusInClub'
import $api from '../../utils/api'

function Abandon() {
    const router = useRouter()
    const {getItem, setItem} = useLocalStorage('account');
    const selectedClub = useSelector((state) => state.selectedClub.value.name)
    const selectedClubId = useSelector((state) => state.selectedClub.value.id)
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.studentStatusInClub)
    const account = getItem()
  
    async function Confirm(){
      
      let response = undefined;
  
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
                Сиздин табыштамаңыз баш тартылган жок.
        </Alert>
      
  
    }

    if(data == null)
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
  
}

export default Abandon