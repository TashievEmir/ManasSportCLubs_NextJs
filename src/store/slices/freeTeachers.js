import { createSlice } from "@reduxjs/toolkit";
import {fetchFreeTeachers} from '../actions/fetchFreeTeachers'

const freeTeacherSlice = createSlice({
    name: "teacher",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchFreeTeachers.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default freeTeacherSlice.reducer