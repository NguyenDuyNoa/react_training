import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice"
import userReducer from "./Slice/userSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
})
