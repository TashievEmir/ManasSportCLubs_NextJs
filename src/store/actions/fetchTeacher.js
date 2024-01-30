import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchTeachers = createAsyncThunk(
    "teacher/get",
    async () =>{
        try{
            const response = await $api.get("/Teacher/GetAll")
            console.log(response.data)
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)