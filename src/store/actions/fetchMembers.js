import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchMembers = createAsyncThunk(
    "club/getMembers",
    async () =>{
        try{
            const response = await $api.get("/club/GetMembers?id=3")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)