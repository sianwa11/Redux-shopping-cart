import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  items: [
    { id: 1, name: "Lenovo Yoga 510-chasis", price: 35, quantity: 1 },
    { id: 2, name: "Lenovo Yoga 510-SSD", price: 70, quantity: 1 },
    { id: 3, name: "SONY Headphones", price: 12, quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
  },
});

export const { toggleCart, deleteItem, decrementQuantity, incrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
