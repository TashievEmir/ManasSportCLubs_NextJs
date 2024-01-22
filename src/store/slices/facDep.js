import { createSlice } from "@reduxjs/toolkit";
import { fetchDepartament } from "../actions/fetchDepartament";
import { fetchFaculties } from "../actions/fetchFaculties";


export const facDepSlice = createSlice({
    name: "departament",
    initialState: {
        departaments: [],
        faculties: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDepartament.fulfilled, (state, {payload}) => {
            state.departaments = payload
        })
        builder.addCase(fetchFaculties.fulfilled, (state, {payload}) => {
            state.faculties = payload
        })
    }
})

export default facDepSlice.reducer