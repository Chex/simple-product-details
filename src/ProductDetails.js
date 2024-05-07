import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductDetails();
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Select a size please!");
      return;
    }

    const selectedProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageURL: product.imageURL,
      size: selectedSize,
    };
    addToCart(selectedProduct);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imageURL} alt={product.title} />
      <div>
        <p className="product-title">{product.title}</p>
        <p className="price-text">${product.price.toFixed(2)}</p>
        <p className="product-des-text">{product.description}</p>
        <div>
          <div>
            SIZE<span className="required-star">*</span>{" "}
            <span className="selected-size-text">{selectedSize}</span>
          </div>
          {product.sizeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedSize(option.label)}
              className={`size-button ${
                selectedSize === option.label ? "selected" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button className="cart-button" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
