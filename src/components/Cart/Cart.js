import React from "react";

import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h3 className={styles.cart__heading}>Cart</h3>
      <div className={styles.cart__amount}>
        <span>0</span>
      </div>
    </div>
  );
};

export default Cart;
