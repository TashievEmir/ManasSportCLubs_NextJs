import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {id: 0, name: ''}
  }

const selectedClubSlice = createSlice({
    name: "selectedClub",
    initialState,
    reducers: {
        setSelectedClub:(state, action) =>{
            state.value = action.payload
        }
    }
})

export const { setSelectedClub } = selectedClubSlice.actions
export default selectedClubSlice.reducer