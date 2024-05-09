import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchFreeTeachers = createAsyncThunk(
    "freeTeacher/get",
    async () =>{
        try{
            const response = await $api.get("/Teacher/GetAllFree")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)