import React from "react";
import { CartProvider } from "./CartContext";
import Header from "./Header";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductDetails />
    </CartProvider>
  );
}

export default App;
