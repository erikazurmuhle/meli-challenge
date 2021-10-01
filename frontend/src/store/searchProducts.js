import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsSearch: {},
};

export const searchProd = createAsyncThunk("SEARCHPROD", (productName) => {
  return axios.get(`http://localhost:3005/api/search/${productName}`);
});

const searchProductsReducer = createReducer(initialState, {
  [searchProd.fulfilled]: (state, action) => action.payload.data,
});

export default searchProductsReducer;
