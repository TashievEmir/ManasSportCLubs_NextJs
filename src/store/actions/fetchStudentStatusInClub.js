import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchStudentStatusInClub = createAsyncThunk(
    "studentStatus",
    async (params, dispatch) =>{
        try{
            const response = await $api.get("/Club/GetStudentStatus",{params:{ userId: params.userId,
                                                                                clubId: params.clubId}})
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)