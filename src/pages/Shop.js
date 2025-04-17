import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Home.css";

import shop1 from "./images/moisturizing-cream.jpeg";
import Shop2 from "./images/anti-aging-serum1.jpeg";
import Shop3 from "./images/sunscreen-lotion.jpeg";
import Shop4 from "./images/night-cream01.jpeg";

const products = [
  {
    id: 1,
    title: "Moisturizing Cream",
    description: "Deep hydration for glowing skin.",
    price: 30.0,
    imageUrl: shop1,
  },
  {
    id: 2,
    title: "Anti-aging Serum",
    description: "Reduce fine lines and rejuvenate your skin.",
    price: 45.0,
    imageUrl: Shop2,
  },
  {
    id: 3,
    title: "Sunscreen Lotion",
    description: "Protect your skin from harmful UV rays.",
    price: 20.0,
    imageUrl: Shop3,
  },
  {
    id: 4,
    title: "Night Cream",
    description: "Restore from your skin overnight.",
    price: 40.0,
    imageUrl: Shop4,
  },
];

const Shop = () => {
  const { updateCart } = useOutletContext();

  return (
    <div className="shop-container">
      <h2>Skincare Products</h2>
      <div className="products-flex">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-img" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <button
                className="btn btn-secondary add-to-cart-btn"
                onClick={() => updateCart(product)}
              >
               <i className="fa-solid fa-cart-shopping"></i> Add to Cart
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
