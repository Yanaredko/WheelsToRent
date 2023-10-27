import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const carApi = axios.create({
  baseURL: "https://65398231e3b530c8d9e8770c.mockapi.io",
});

export const fetchCarsThunk = createAsyncThunk("fetchCars", async (_, thunkAPI) => {
  try {
    const response = await carApi.get("/adverts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loadMoreThunk = createAsyncThunk("loadMore", async (page, { rejectWithValue }) => {
  try {
    const response = await carApi.get(`/adverts?page=${page}&limit=12`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
