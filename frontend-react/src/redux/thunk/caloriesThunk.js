/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCalories = createAsyncThunk(
  "post/createCalorie",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/api/calories",
        params
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateCalories = createAsyncThunk(
  "post/updateCalorie",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:3001/api/calories/${params.id}`,
        params
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCaloriesList = createAsyncThunk(
  "post/getCalorieList",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3001/api/calories`,
        params
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteCalories = createAsyncThunk(
  "post/deleteCalorie",
  async (params, { rejectWithValue }) => {
    try {
      debugger;
      const response = await axios.delete(
        `http://127.0.0.1:3001/api/calories/${params}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
