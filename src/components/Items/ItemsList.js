import React, { useEffect } from "react";

import { fetchItems } from "../../slices/item-slice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ItemsList.module.scss";

const ItemsList = () => {
  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.items);
  // const { items } = itemsState;

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    console.log(itemsState);
  }, [itemsState]);

  return (
    <>
      <div className={styles.items}>
        <div className={styles.item}>
          <div>
            <img src="" alt="Item Image" />
          </div>
          <h1>Title</h1>
          <div>
            <span>Rating</span>
          </div>
          <div>
            <span>Price</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
