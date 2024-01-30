import { createAsyncThunk } from "@reduxjs/toolkit";
import {$api} from '../../utils/api'
import axios from "axios";

export const fetchDepartament = createAsyncThunk(
    'departament/get',
    async (thunkAPI) => {
    try {
      const response = await $api.get("/Department/GetAll")
      return response.data
    } catch (error) {
      return error.message
    }
    }
  )