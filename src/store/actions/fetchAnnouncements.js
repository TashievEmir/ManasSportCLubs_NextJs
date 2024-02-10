 import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchAnnouncements = createAsyncThunk(
    "announcement/get",
    async () =>{
        try{
            const response = await $api.get("/announcement/GetAll")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)