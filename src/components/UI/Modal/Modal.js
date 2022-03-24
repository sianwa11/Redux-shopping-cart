import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop}>{props.children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
