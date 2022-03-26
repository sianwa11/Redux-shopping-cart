import React from "react";
import CartItems from "./components/Cart/CartItems";
import Header from "./components/Header/Header";
import Modal from "./components/UI/Modal/Modal";

import { useSelector } from "react-redux";

function App() {
  const cartState = useSelector((state) => state.cart);
  return (
    <>
      <Header />

      {cartState.visible && (
        <Modal>
          <CartItems />
        </Modal>
      )}
    </>
  );
}

export default App;
