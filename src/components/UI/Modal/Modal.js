import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { toggleCart } from "../../../slices/cart-slice";

import styles from "./Modal.module.scss";

const Modal = (props) => {
  const dispatch = useDispatch();

  const hideCart = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleCart());
    }
  };

  return ReactDOM.createPortal(
    <div onClick={hideCart} className={styles.backdrop}>
      {props.children}
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
