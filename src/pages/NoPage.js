// src/Offers.js
import React from "react";
import "./Home.css"; // Ensure responsive CSS is added

import Blog1 from "./images/Moisturizer.jpeg";
import Blog2 from "./images/anti-aging-serum.jpeg";
import Blog3 from "./images/Sunscreen Lotion1.jpeg";
import Blog4 from "./images/night-cream1.jpeg";
import Blog5 from "./images/brightening-lotion.jpeg";
import Blog6 from "./images/cleansing-gel.jpeg";

const offers = [
  {
    id: 1,
    title: "Moisturizing Cream",
    description: "Nourish your skin with deep hydration.",
    imageUrl: Blog1,
  },
  {
    id: 2,
    title: "Anti-aging Serum",
    description: "Rejuvenate your skin and reduce fine lines.",
    imageUrl: Blog2,
  },
  {
    id: 3,
    title: "Sunscreen Lotion",
    description: "Protect your skin from harmful UV rays.",
    imageUrl: Blog3,
  },
  {
    id: 4,
    title: "Night Cream",
    description: "Restore and replenish your skin while you sleep.",
    imageUrl: Blog4,
  },
  {
    id: 5,
    title: "Brightening Lotion",
    description: "Achieve an even skin tone with brightening effects.",
    imageUrl: Blog5,
  },
  {
    id: 6,
    title: "Cleansing Gel",
    description: "Gently cleanse and refresh your skin.",
    imageUrl: Blog6,
  },
];

const Offers = () => {
  return (
    <div className="offers-container container my-1 ">
      <h2 className="text-center mb-4">Glowing Skincare Offers</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {offers.map((offer) => (
          <div key={offer.id} className="col">
            <div className="card offer-card shadow-sm h-100">
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="offer-img card-img-top img-fluid rounded"
              />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{offer.title}</h3>
                <p className="card-text">{offer.description}</p>
                <button className="offer-btn  mt-auto ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
