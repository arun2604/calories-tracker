/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { deleteCalories } from "../thunk/caloriesThunk";

const initialState = {
  foodEntries: [],
  id: null,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodEntry: (state, action) => {
      if (action.payload.length > 0) {
        var newList = [];
        action.payload.forEach((entry) => {
          const date = new Date(entry.Date);
          newList.push({
            ...entry,
            Date: date.toLocaleDateString(),
          });
        });
        state.foodEntries = newList;
      }
    },
    addId: (state, action) => {
      state.id = action.payload;
    },
    deleId: (state) => {
      state.id = null;
    },
  },
});

export const { addFoodEntry, addId, deleId } = foodSlice.actions;

export default foodSlice.reducer;
