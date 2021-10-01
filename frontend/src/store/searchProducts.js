import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsSearch: {},
};

export const searchProd = createAsyncThunk("SEARCHPROD", (productName) => {
  console.log("PRODNAME CREATASYNC", productName);
  return axios.get(`http://localhost:3005/api/search/${productName}`);
});
export const resetState = createAction("RESETSTATE");
const searchProductsReducer = createReducer(initialState, {
  [searchProd.fulfilled]: (state, action) => action.payload.data,
  [resetState]: (state, action) => (state = Object.assign(state, initialState)),
});

export default searchProductsReducer;
