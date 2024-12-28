/** @format */

import { configureStore } from "@reduxjs/toolkit";
import CombineReducer from "./rootReducer.js";

export const RESET_STATE = "RESET_STATE";

export const resetState = () => ({
  type: RESET_STATE,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }

  return CombineReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
