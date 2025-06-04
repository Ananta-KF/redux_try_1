import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartReducer   from "../features/cart/cartSlice";
import ordersReducer from "../features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart:   cartReducer,
    orders: ordersReducer
  },
  middleware: getDefault =>
    getDefault().concat(apiSlice.middleware),
});
