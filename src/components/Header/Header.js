import React from "react";
import Cart from "../Cart/Cart";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Cart />
      </header>
    </>
  );
};

export default Header;
