import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {}, total: 0 },
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      state.items[id] = (state.items[id] || 0) + 1;
      state.total += 1;
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      if (state.items[id]) {
        state.total -= state.items[id];
        delete state.items[id];
      }
    },
    clearCart(state) {
      state.items = {};
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
