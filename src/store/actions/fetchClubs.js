import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchClubs = createAsyncThunk(
    "club/get",
    async () =>{
        try{
            const response = await $api.get("/club/GetAll")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)