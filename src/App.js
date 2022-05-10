import CartItems from "./components/Cart/CartItems";
import Header from "./components/Header/Header";
import Modal from "./components/UI/Modal/Modal";

import { useSelector } from "react-redux";
import ItemsList from "./components/Items/ItemsList";

function App() {
  const cartState = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <ItemsList />
      {cartState.visible && (
        <Modal>
          <CartItems />
        </Modal>
      )}
    </>
  );
}

export default App;
