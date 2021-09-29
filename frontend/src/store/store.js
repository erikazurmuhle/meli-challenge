import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchProductsReducer from "./searchProducts";
import singleProductReducer from "./singleProduct";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    SearchProducts: searchProductsReducer,
    SingleProduct: singleProductReducer,
  },
});

export default store;
