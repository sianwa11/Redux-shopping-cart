import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styles from "./CartItem.module.scss";
import Item from "./Item";

import { resetState } from "../../slices/cart-slice";
import { database } from "../../firebase/app";
import { ref, set } from "firebase/database";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { items } = cartState;

  function addCheckoutItems() {
    items.forEach((element) => {
      set(ref(database, "items/" + element.id), {
        title: element.title,
        category: element.category,
        description: element.description,
        imageUrl: element.image,
        price: element.price * element.quantity,
        rating: element.rating,
        quantity: element.quantity,
      });
    });

    dispatch(resetState({}));
    console.log("Items Bought");
  }

  return (
    <>
      <div className={styles.items}>
        <div className={styles.items__actions}>
          <button
            type="button"
            className={styles.items__btn}
            onClick={addCheckoutItems}
          >
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
