/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import foodSlice from "./slice/dashboardSlice.js";

export default combineReducers({
  food: foodSlice,
});
