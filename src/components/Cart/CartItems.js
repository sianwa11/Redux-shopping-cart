import React from "react";

import Modal from "../UI/Modal/Modal";
import styles from "./CartItem.module.scss";

import Item from "./Item";

const DUMMY = [
  { id: 1, name: "Lenovo Yoga 510-chasis", price: 400, quantity: 1 },
  {
    id: 2,
    name: "Introduction to Data Structures & Algorithms",
    price: 86,
    quantity: 1,
  },
  { id: 3, name: "PlayStation 5", price: 500, quantity: 1 },
];

const CartItems = () => {
  return (
    <>
      <Modal>
        <div className={styles.items}>
          <button type="button" className={styles.items__btn}>
            Checkout
          </button>
          <div>Total Amount: </div>
          {DUMMY.map((item) => (
            <Item
              key={item.id}
              amount={item.price}
              itemName={item.name}
              quantity={item.quantity}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CartItems;
