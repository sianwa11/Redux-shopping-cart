import React from "react";
import styles from "./ItemsList.module.scss";

import { FaCartPlus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cart-slice";
import { queueItem } from "../../slices/item-slice";

const Item = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <img
        className={styles.item__img}
        src={props.image}
        alt={props.category}
      />
      <div className={styles.item__title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.item__details}>
        <p>{props.rating}</p>
        <p>$ {props.price}</p>
      </div>
      {!props.queued && (
        <div
          className={styles["item--img__box"]}
          onClick={() => {
            dispatch(addItem(props));
            dispatch(queueItem({ id: props.id }));
          }}
        >
          <FaCartPlus className={styles.item__btn} />
        </div>
      )}
    </div>
  );
};

export default Item;
