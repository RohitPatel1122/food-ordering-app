import Header from "./components/header/Header";

import React from "react";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
