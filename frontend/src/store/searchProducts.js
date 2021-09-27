import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsSearch: {},
};

export const searchProd = createAsyncThunk("searchProd", (productName) => {
  console.log("PRODNAME CREATASYNC", productName);
  return axios
    .get(`http://localhost:3005/api/search/${productName}`)
    .then((response) => {
      console.log("PARASETEAR PROD", response.data);
      return response;
    });
});
const searchProductsReducer = createReducer(initialState, {
  [searchProd.fulfilled]: (state, action) => {
    console.log("PAYLOAD", action.payload);
    //state.productsSearch = payload.results;
  },
});

export default searchProductsReducer;
