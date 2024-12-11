import React from "react";
import c1 from "./images/c1.jpeg";
import c2 from "./images/c2.jpeg";
import c3 from "./images/c3.jpeg";
import Coll1 from "./images/moisturizing-cream1.jpeg"; 
import Coll2 from "./images/anti-aging-serum2.jpeg";
import Coll3 from "./images/sunscreen-lotion3.jpeg";
import Coll4 from "./images/night-cream.jpeg";
import Coll5 from "./images/brightening-lotions.jpeg";
import Coll6 from "./images/cleansing-gel1.jpeg";
import Coll7 from "./images/night-cream02.jpeg";
import Coll8 from "./images/brightening-lotion02.jpeg";
import Coll9 from "./images/cleansing-gel01.jpeg";
import SummerImage from "./images/SummerImage.jpeg";
import WhatsNewImage from "./images/WhatsNewImage.jpeg";
import Buy1Get1Image from "./images/Buy1Get1Image.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

const collectionItems = [
  {
    id: 1,
    title: "Glowing Serum",
    description: "Brighten your skin with our glow-enhancing.",
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
    description: "Protect your skin while keeping it glowing.",
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
    description: "Gently exfoliate to reveal fresh, glowing skin care.",
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

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "100%", margin: "auto" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />

      <div className="carousel-container-fluid container my-1">
        <h2 className="text-center mb-4">Exciting Offers</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="offer-card">
              <img
                src={SummerImage}
                alt="Summer Collection"
                className="offer-img img-fluid rounded"
              />
              <h3 className="text-center mt-3">Summer Collection</h3>
              <button className="offer-btn1 mt-auto">
                Discover Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="offer-card">
              <img
                src={WhatsNewImage}
                alt="What's New"
                className="offer-img img-fluid rounded"
              />
              <h3 className="text-center mt-3">New Collection</h3>
              <button className="offer-btn1 mt-auto">
                Discover Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="offer-card">
              <img
                src={Buy1Get1Image}
                alt="Buy 1 Get 1"
                className="offer-img img-fluid rounded"
              />
              <h3 className="text-center mt-3">Buy 1 Get 1</h3>
              <button className="offer-btn1 mt-auto">
                Discover Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="collection-container container my-4">
        <h2 className="text-center">Our Glowing Skincare Collection</h2>
        <br/>
        <br/>
        <div className="row">
          {collectionItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="collection-card">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="collection-img img-fluid"
                />
                <div className="collection-info mt-2">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
