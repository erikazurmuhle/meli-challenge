import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
};
export const getProd = createAsyncThunk("getProd", (id) => {
  return axios.get(`http://localhost:3005/api/item/${id}`);
});
export const resetState = createAction("RESETSTATE");
const singleProductReducer = createReducer(initialState, {
  [getProd.fulfilled]: (state, action) => action.payload.data,
  [resetState]: (state, action) => (state = initialState),
});

export default singleProductReducer;
