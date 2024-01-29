import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchTeacher = createAsyncThunk(
    "teacher/get",
    async () =>{
        try{
            const response = await $api.get("/teacher/GetAll")
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)