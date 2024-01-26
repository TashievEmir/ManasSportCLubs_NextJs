import { createSlice } from "@reduxjs/toolkit";
import {fetchAnnouncements} from '../actions/fetchAnnouncements'
const announcementSlice = createSlice({
    name: "announcement",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchAnnouncements.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default announcementSlice.reducer