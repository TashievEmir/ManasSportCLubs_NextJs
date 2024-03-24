import { createSlice } from "@reduxjs/toolkit";
import {fetchStudentStatusInClub} from '../actions/fetchStudentStatusInClub'

const studentStatusSlice = createSlice({
    name: "studentStatus",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchStudentStatusInClub.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default studentStatusSlice.reducer