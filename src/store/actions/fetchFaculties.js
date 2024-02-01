import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from '../../utils/api'
import axios from "axios";

export const fetchFaculties = createAsyncThunk(
    'faculties/get',
    async (thunkAPI) => {
    try {
      const response = await $api.get("/Faculty/GetAll")
      return response.data
    } catch (error) {
      return error.message
    }
    }
  )