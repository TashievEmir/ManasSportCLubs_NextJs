import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
  }

const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        setLoginStatus:(state, action) =>{
            state.value = action.payload
        }
    }
})

export const { setLoginStatus } = loginStatusSlice.actions
export default loginStatusSlice.reducer