import { createSlice } from "@reduxjs/toolkit";
import {fetchTeacher} from '../actions/fetchTeacher'
const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchTeacher.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default teacherSlice.reducer