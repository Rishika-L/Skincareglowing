// Shop.js
import React, { useState } from "react";
import "./Home.css"; 

import shop1 from "./images/moisturizing-cream.jpeg"; // Make sure you have this image in your 'images' folder or replace with actual URL
import Shop2 from "./images/anti-aging-serum1.jpeg";
import Shop3 from "./images/sunscreen-lotion.jpeg";
import Shop4 from "./images/night-cream01.jpeg";

const products = [
  {
    id: 1,
    title: "Moisturizing Cream",
    description: "Deep hydration for glowing skin.",
    price: 30.00,  
    imageUrl: shop1,
  },
  {
    id: 2,
    title: "Anti-aging Serum ",
    description: "Reduce fine lines and rejuvenate your skin.",
    price: 45.00,
    imageUrl: Shop2,
  },
  {
    id: 3,
    title: "Sunscreen Lotion",
    description: "Protect your skin from harmful UV rays.",
    price: 20.00,
    imageUrl: Shop3,
  },
  {
    id: 4,
    title: "Night Cream",
    description: "Restore your skin overnight.",
    price: 40.00,
    imageUrl: Shop4,
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (product) => {
    setCart([...cart, product]); 
    alert(`${product.title} added to cart!`);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2); 
  };

  return (
    <div className="shop-container" container my-4>
      <h2>Skincare Products</h2>
      <div className="products-flex">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-img" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <div className="button-container">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <h3>
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </h3>
        <div className="cart-summary">
          <p>Items in Cart: {cart.length}</p>
          <p>Total: ${calculateTotalAmount()}</p>
        </div>
        <div className="cart-images">
          {cart.length > 0 && cart.slice(0, 5).map((item, index) => (
            <img key={index} src={item.imageUrl} alt={item.title} className="cart-item-img" />
          ))}
          {cart.length > 5 && <p>+{cart.length - 5} more items</p>} {}
        </div>
      </div>
    </div>
  );
};

export default Shop;
