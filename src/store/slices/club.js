import { createSlice } from "@reduxjs/toolkit";
import { fetchClubs } from '../../store/actions/fetchClubs'

const clubSlice = createSlice({
    name: "club",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchClubs.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default clubSlice.reducer