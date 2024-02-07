import { createSlice } from "@reduxjs/toolkit";
import { fetchClubs } from '../../store/actions/fetchClubs'

const selectedClubSlice = createSlice({
    name: "selectedClub",
    initialState: '',
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchClubs.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default selectedClubSlice.reducer