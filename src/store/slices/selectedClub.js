import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }

const selectedClubSlice = createSlice({
    name: "selectedClub",
    initialState,
    reducers: {
        setSelectedClub:(state, action) =>{
            state.value = action.payload
        }
    }
    // extraReducers: (builder) =>{
    //     builder.addCase( fetchClubs.fulfilled, (state, { payload })=>{
    //         state.data = payload
    //     })
    // }
})

export const { setSelectedClub } = selectedClubSlice.actions
export default selectedClubSlice.reducer