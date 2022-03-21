import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Lenovo Yoga 510-chasis", price: 3500, quantity: 1 },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
