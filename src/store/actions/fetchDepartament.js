import { createAsyncThunk } from "@reduxjs/toolkit";
import {$api} from '../../utils/api'
import axios from "axios";

export const fetchDepartament = createAsyncThunk(
    'departament/get',
    async (thunkAPI) => {
    try {
      const response = await axios.get("https://10.111.70.174:5000/api/v1/Department/GetAll")
      return response.data
    } catch (error) {
      return error.message
    }
    }
  )