import React from "react";
import styles from "./CartItem.module.scss";

const CartItems = () => {
  return (
    <>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.item__details}>
            <div className={styles["item__details--price"]}>$86</div>
            <div className={styles["item__details--name"]}>
              Item NameIntroduction to Algorithms, 3rd Edition
              <span>by Thomas H. Cormen</span>
            </div>
          </div>
          <div className={styles.item__actions}>
            <div className="item__actions--1">
              <div className="buttons">+</div>
              <div className="">Item Quantity</div>
              <div className="buttons">-</div>
            </div>

            <div className="item__actions--2">
              <div className="buttons">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
