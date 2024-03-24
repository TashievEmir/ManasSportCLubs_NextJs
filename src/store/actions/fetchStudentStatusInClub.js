import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchStudentStatusInClub = createAsyncThunk(
    "studentStatus",
    async () =>{
        try{
            const response = await $api.get("/Club/GetStudentStatus",{params:{ userId: 1,
                                                                                clubId: 2}})
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)