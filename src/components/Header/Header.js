import React from "react";
import Cart from "../Cart/Cart";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>Header logo</div>
        <Cart />
      </header>
    </>
  );
};

export default Header;
