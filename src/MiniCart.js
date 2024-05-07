import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./MiniCart.css";

const MiniCart = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="mini-cart-container">
      <button
        onClick={toggleCart}
        className={`cart-toggle ${isOpen ? "open" : ""}`}
      >
        My Cart ( {cartItems.reduce((acc, item) => acc + item.quantity, 0)} )
      </button>
      {isOpen && (
        <div className="mini-cart">
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index}>
                  <div>
                    <img
                      src={item.selectedProduct.imageURL}
                      alt={item.selectedProduct.title}
                    />
                  </div>
                  <div>
                    {item.selectedProduct.title}
                    <br />
                    {item.quantity}x{" "}
                    <span className="price-text">
                      ${item.selectedProduct.price.toFixed(2)}
                    </span>
                    <br />
                    Size: {item.selectedProduct.size}
                  </div>
                </li>
              ))
            ) : (
              <li>Your cart is empty.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
