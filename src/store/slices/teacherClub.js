import { createSlice } from "@reduxjs/toolkit";
import { fetchTeacherClub } from '../../store/actions/fetchTeacherClub'

const teacherClubSlice = createSlice({
    name: "teacherClub",
    initialState: {
        teacherClub: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchTeacherClub.fulfilled, (state, { payload })=>{
            state.teacherClub = [payload]
        })
    }
})
export default teacherClubSlice.reducer