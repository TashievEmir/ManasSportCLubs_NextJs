import { createSlice } from "@reduxjs/toolkit";
import { fetchSchedule } from '../../store/actions/fetchSchedule'

const scheduleSlice = createSlice({
    name: "schedule",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchSchedule.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default scheduleSlice.reducer