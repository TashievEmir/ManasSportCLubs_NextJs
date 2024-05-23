import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchTeacherClub = createAsyncThunk(
    "club/getTeacherClub",
    async (id) =>{
        try{
            const response = await $api.get(`/club/GetTeacherClub?userId=${id}`)
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)