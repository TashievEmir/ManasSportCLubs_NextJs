import { createSlice } from "@reduxjs/toolkit";
import { fetchMembers } from '../../store/actions/fetchMembers'

const memberSlice = createSlice({
    name: "club",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchMembers.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default memberSlice.reducer