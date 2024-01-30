import { createSlice } from "@reduxjs/toolkit";
import {fetchTeachers} from '../actions/fetchTeacher'
const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchTeachers.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default teacherSlice.reducer