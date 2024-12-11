import React from "react";
import "./Home.css";
import Coll1 from "./images/moisturizing-cream1.jpeg"; 
import Coll2 from "./images/anti-aging-serum2.jpeg";
import Coll3 from "./images/sunscreen-lotion3.jpeg";
import Coll4 from "./images/night-cream.jpeg";
import Coll5 from "./images/brightening-lotions.jpeg";
import Coll6 from "./images/cleansing-gel1.jpeg";
import Coll7 from "./images/night-cream02.jpeg";
import Coll8 from "./images/brightening-lotion02.jpeg";
import Coll9 from "./images/cleansing-gel01.jpeg";

const collectionItems = [
  {
    id: 1,
    title: "Glowing Serum",
    description: "Brighten your skin with our glow-enhancing serum.",
    price: "$35.00",
    imageUrl: Coll1,
  },
  {
    id: 2,
    title: "Moisturizer",
    description: "Deep hydration for smooth and glowing skin.",
    price: "$25.00",
    imageUrl: Coll2,
  },
  {
    id: 3,
    title: "Sunscreen",
    description: "Protect your skin while keeping it face glowing.",
    price: "$18.00",
    imageUrl: Coll3,
  },
  {
    id: 4,
    title: "Night Cream",
    description: "Rejuvenate your skin overnight with our luxurious cream.",
    price: "$40.00",
    imageUrl: Coll4,
  },
  {
    id: 5,
    title: "Face Mask",
    description: "Purify your skin and achieve a glowing complexion.",
    price: "$22.00",
    imageUrl: Coll5,
  },
  {
    id: 6,
    title: "Vitamin C Serum",
    description: "Revitalize your skin and brighten your complexion.",
    price: "$30.00", 
    imageUrl: Coll6,
  },
  {
    id: 7,
    title: "Exfoliating Scrub",
    description: "Gently exfoliate to reveal fresh, glowing skin.",
    price: "$28.00",
    imageUrl: Coll7,
  },
  {
    id: 8,
    title: "Hydrating Mask",
    description: "Hydrate your skin with a nourishing skin care mask.",
    price: "$33.00",
    imageUrl: Coll8,
  },
  {
    id: 9,
    title: "Vitamin E Serum",
    description: "Revitalize your skin and brighten your complexion.",
    price: "$20.00",
    imageUrl: Coll9,
  },
];

const Collection = () => {
  // Placeholder function for adding to cart
  const handleAddToCart = (item) => {
    alert(`${item.title} has been added to your cart.`);
    // Implement your cart functionality here
  };

  return (
    <div className="collection-container container my-0">
      <h2>Our Glowing Skincare Collection</h2>
      <div className="collection-grid">
        {collectionItems.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.imageUrl} alt={item.title} className="collection-img" /> 
            <div className="collection-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button 
                className="add-to-cart-btn" 
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
