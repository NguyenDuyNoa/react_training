import { createSlice } from "@reduxjs/toolkit";
import { notification } from "../../ultil/helper";

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [...cart],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        state.cart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          quantity:
            (state.cart[existingItemIndex].quantity || 1) +
            (newItem.quantity || 1),
        };
      } else {
        state.cart.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));

      notification("Add successfully!");
    },

    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToRemove);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    updateCartItem(state, action) {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    fetchCartItems(state) {
      const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
      state.cart = cart;
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, fetchCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
