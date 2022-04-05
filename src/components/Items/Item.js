import React from "react";
import styles from "./ItemsList.module.scss";

const Item = (props) => {
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
    </div>
  );
};

export default Item;
