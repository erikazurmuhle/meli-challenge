import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
};
export const getProd = createAsyncThunk("getProd", (id) => {
  console.log("getprod CREATASYNC IDDDDD", id);
  return axios.get(`http://localhost:3005/api/item/${id}`);
});
const singleProductReducer = createReducer(initialState, {
  [getProd.fulfilled]: (state, action) => action.payload.data,
});

export default singleProductReducer;
