import React, { useEffect, useState } from "react";

import { fetchItems, LOADING_STATE } from "../../slices/item-slice";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

import styles from "./ItemsList.module.scss";

import { ref, onValue } from "firebase/database";
import { database } from "../../firebase/app";

const ItemsList = () => {
  const [checkedItems, setChItems] = useState(null);
  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.items);
  const { items, status } = itemsState;
  const filteredIds = [];

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    const itemsRef = ref(database, "items/");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setChItems(data);
    });

    return () => {};
  }, []);

  if (checkedItems) {
    for (const key of Object.keys(checkedItems)) {
      filteredIds.push(+key);
    }
  }

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
            queued={item.queued ? true : false}
            rating={item.rating.rate}
          />
        ))}
      </div>
    );
  }

  if (status === LOADING_STATE.DONE && checkedItems && filteredIds) {
    itemsRendered = (
      <div className={styles.items}>
        {items
          .filter((item) => !filteredIds.includes(item.id))
          .map((item) => (
            <Item
              id={item.id}
              key={item.id}
              category={item.category}
              description={item.description}
              image={item.image}
              price={item.price}
              title={item.title}
              queued={item.queued ? true : false}
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

  return <>{itemsRendered}</>;
};

export default ItemsList;
