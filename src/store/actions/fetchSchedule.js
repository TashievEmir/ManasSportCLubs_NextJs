import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";
import { useSelector } from 'react-redux'


export const fetchSchedule = createAsyncThunk(   
    "club/getSchedule",   
    async (selectedClub) =>{
        try{
            const response = await $api.get(`/club/GetSchedule?clubId=${selectedClub}`)
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)