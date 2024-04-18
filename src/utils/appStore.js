import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer, // For multiple slice add multiple reducers
    },
});

export default appStore;