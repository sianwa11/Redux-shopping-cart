import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../slices/cart-slice";

export default configureStore({ reducer: { cart: cartReducer } });
