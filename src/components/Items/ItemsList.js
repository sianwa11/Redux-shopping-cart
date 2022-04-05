import React, { useEffect } from "react";

import { fetchItems, LOADING_STATE } from "../../slices/item-slice";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

import styles from "./ItemsList.module.scss";

const ItemsList = () => {
  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.items);
  const { items, status } = itemsState;

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  let itemsRendered = ``;

  if (status === LOADING_STATE.REQUESTED || status === LOADING_STATE.WAITING) {
    itemsRendered = (
      <div className={styles.item__loading}>LOADING ITEMS🚀...</div>
    );
  }

  if (status === LOADING_STATE.DONE) {
    itemsRendered = (
      <div className={styles.items}>
        {items.map((item) => (
          <Item
            id={item.id}
            key={item.id}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating.rate}
          />
        ))}
      </div>
    );
  }

  if (status === LOADING_STATE.ERROR) {
    itemsRendered = (
      <div className={styles.item__loading}>SOMETHING WENT WRONG🚩...</div>
    );
  }

  console.log(items);
  return <>{itemsRendered}</>;
};

export default ItemsList;
