import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../slices/cart-slice";
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const noOfItems = cartState.items.length;

  const showCart = () => {
    dispatch(toggleCart());
  };
  return (
    <div onClick={showCart} className={styles.cart}>
      <h3 className={styles.cart__heading}>Cart</h3>
      <div className={styles.cart__amount}>
        <span>{noOfItems}</span>
      </div>
    </div>
  );
};

export default Cart;
