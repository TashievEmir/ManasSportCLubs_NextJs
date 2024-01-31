import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchSchedule = createAsyncThunk(
    "club/getSchedule",
    async () =>{
        try{
            const response = await $api.get("/club/GetSchedule?id=3")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)