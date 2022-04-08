import React from "react";

import { useSelector } from "react-redux";

import styles from "./CartItem.module.scss";
import Item from "./Item";

const CartItems = () => {
  const cartState = useSelector((state) => state.cart);
  const { items } = cartState;

  return (
    <>
      <div className={styles.items}>
        <div className={styles.items__actions}>
          <button type="button" className={styles.items__btn}>
            Checkout
          </button>
          <div>Total Amount: </div>
        </div>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            amount={item.price * item.quantity}
            itemTitle={item.title}
            quantity={item.quantity}
          />
        ))}
      </div>
    </>
  );
};

export default CartItems;
