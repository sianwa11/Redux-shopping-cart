import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../slices/cart-slice";
import itemsReducer from "../slices/item-slice";

export default configureStore({
  reducer: { cart: cartReducer, items: itemsReducer },
});
