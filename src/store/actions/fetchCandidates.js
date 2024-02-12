import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../utils/api";

export const fetchCandidates = createAsyncThunk(
    "club/getCandidates",
    async (selectedClub) =>{
        try{
            const response = await $api.get(`/club/GetCandidates?id=${selectedClub}`)
            console.log(response.data)
            return response.data
        }
        catch(error){
            return error.message
        }
    }
)