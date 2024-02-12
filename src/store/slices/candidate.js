import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates } from '../../store/actions/fetchCandidates'

const candidateSlice = createSlice({
    name: "candidate",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( fetchCandidates.fulfilled, (state, { payload })=>{
            state.data = payload
        })
    }
})
export default candidateSlice.reducer