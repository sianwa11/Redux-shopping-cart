import React from "react";
import styles from "./CartItem.module.scss";
import "../UI/Icons.scss";

import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

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
            <div className={styles["item__actions--1"]}>
              <div className="icon_btn">
                <FaPlus />
              </div>
              <div className={styles["item__actions--text"]}>
                <b>1</b>
              </div>
              <div className="icon_btn">
                <FaMinus />
              </div>
            </div>

            <div className="item__actions--2">
              <div className="icon_btn">
                <FaRegTrashAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
