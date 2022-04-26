import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({ ...action.payload, quantity: 1 });
    },

    toggleCart(state, action) {
      state.visible = !state.visible;
    },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    incrementQuantity(state, action) {
      const { id } = action.payload;
      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem) selectedItem.quantity++;
    },

    decrementQuantity(state, action) {
      const { id } = action.payload;

      const selectedItem = state.items.find((item) => item.id === id);

      if (selectedItem.quantity > 1 && selectedItem) {
        selectedItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    resetState(state, action) {
      return initialState;
    },
  },
});

export const {
  toggleCart,
  deleteItem,
  decrementQuantity,
  incrementQuantity,
  addItem,
  resetState,
} = cartSlice.actions;

export default cartSlice.reducer;
