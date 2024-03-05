import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchMembers = createAsyncThunk(
    "club/getMembers",
    async (clubId) =>{
        try{
            const response = await $api.get(`/club/GetMembers?clubId=${clubId}`)
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)