import React from "react";

import { useDispatch } from "react-redux";

import styles from "./CartItem.module.scss";
import "../UI/Icons.scss";
import {
  deleteItem,
  decrementQuantity,
  incrementQuantity,
} from "../../slices/cart-slice";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const Item = (props) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(deleteItem({ id }));
  };

  const addQuantity = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const subtractQuantity = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__details}>
          <div className={styles["item__details--price"]}>$ {props.amount}</div>
          <div className={styles["item__details--name"]}>
            {props.itemName}
            <span>by Thomas H. Cormen</span>
          </div>
        </div>
        <div className={styles.item__actions}>
          <div className={styles["item__actions--1"]}>
            <div className="icon_btn">
              <FaPlus onClick={addQuantity.bind(null, props.id)} />
            </div>
            <div className={styles["item__actions--text"]}>
              <b>{props.quantity}</b>
            </div>
            <div className="icon_btn">
              <FaMinus onClick={subtractQuantity.bind(null, props.id)} />
            </div>
          </div>

          <div className="item__actions--2">
            <div className="icon_btn">
              <FaRegTrashAlt onClick={removeItem.bind(null, props.id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
