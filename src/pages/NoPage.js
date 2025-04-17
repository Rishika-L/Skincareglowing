import React from "react";
import { useOutletContext } from "react-router-dom"; // To access context
import "./Home.css";

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
    price: 30.0,
    imageUrl: Blog1,
  },
  {
    id: 2,
    title: "Anti-aging Serum",
    description: "Rejuvenate your skin and reduce fine lines.",
    price: 45.0,
    imageUrl: Blog2,
  },
  {
    id: 3,
    title: "Sunscreen Lotion",
    description: "Protect your skin from harmful UV rays.",
    price: 20.0,
    imageUrl: Blog3,
  },
  {
    id: 4,
    title: "Night Cream",
    description: "Restore and replenish your skin while you sleep.",
    price: 40.0,
    imageUrl: Blog4,
  },
  {
    id: 5,
    title: "Brightening Lotion",
    description: "Achieve an even skin tone with brightening effects.",
    price: 35.0,
    imageUrl: Blog5,
  },
  {
    id: 6,
    title: "Cleansing Gel",
    description: "Gently cleanse and refresh your skin.",
    price: 25.0,
    imageUrl: Blog6,
  },
];

const Offers = () => {
  const { updateCart } = useOutletContext(); // Access the cart update function

  return (
    <div className="offers-container container my-8">
      <h2 className="text-center mb-7">Glowing Skincare Offers</h2>
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
                <p className="card-price"><strong>${offer.price.toFixed(2)}</strong></p>
                <button
  className="btn btn-success add-to-cart-btn mt-auto px-4 py-2  fw-bold"
  style={{ fontSize: "1.2rem" , marginRight: "25px",
  } }
  onClick={() => updateCart(offer)}
>
  <i className="fa-solid fa-cart-shopping me-2"></i> Add to Cart
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
