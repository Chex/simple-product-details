import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (selectedProduct) => {
    const index = cartItems.findIndex(
      (item) => item.selectedProduct.size === selectedProduct.size
    );
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { selectedProduct, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
