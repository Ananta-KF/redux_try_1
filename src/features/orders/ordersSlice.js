import { createSlice, nanoid } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    placeOrder: {
      reducer(state, action) { state.push(action.payload); },
      prepare(order) {
        return { payload: { id: nanoid(), date: new Date().toISOString(), ...order } };
      },
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
