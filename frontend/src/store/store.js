import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchProductsReducer from "./searchProducts";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    SearchProducts: searchProductsReducer,
  },
});

export default store;
