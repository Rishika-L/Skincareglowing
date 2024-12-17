import React from "react";
import c1 from "./images/c1.jpeg";
import c2 from "./images/c2.jpeg";
import c3 from "./images/c3.jpeg";

import Blog1 from "./images/Moisturizer.jpeg";
import Blog2 from "./images/anti-aging-serum.jpeg";
import Blog3 from "./images/Sunscreen Lotion1.jpeg";
import Blog4 from "./images/night-cream1.jpeg";
import Blog5 from "./images/brightening-lotion.jpeg";
import Blog6 from "./images/cleansing-gel.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

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

const services = [
  {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our personalized facial therapies.",
    icon: "💆‍♀️",
  },
  {
    title: "Glow Boosters",
    description: "Brighten your complexion with our signature glow-boosting treatments.",
    icon: "✨",
  },
  {
    title: "Hydration Therapy",
    description: "Keep your skin hydrated and radiant with our specialized treatments.",
    icon: "💧",
  },
  {
    title: "Skin Consultation",
    description: "Expert advice for your unique skincare needs.",
    icon: "👩‍⚕️",
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
      <br/>

    <h2 className="text-center mb-4">Our Services</h2>
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <span className="service-icon">{service.icon}</span>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>

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

    <div class="container" id="contact" data-aos="fade-up" data-aos-duration="1500">
  <h2 class="text-center mb-4">CONTACT US</h2>
  <div class="row g-3">
    <div class="col-md-4">
      <div class="form-group">
        <input type="text" class="form-control" id="usr" placeholder="Name" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <input type="email" class="form-control" id="eml" placeholder="Email" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <input type="number" class="form-control" id="phn" placeholder="Phone" />
      </div>
    </div>
  </div>
<div class="form-group mt-3">
    <textarea class="form-control" rows="3" id="comment" placeholder="Message"></textarea>
  </div>
  <div class="text-center mt-4" id="messagebtn">
    <button class="btn btn-primary px-4 py-2">Send Message</button>
  </div>
</div>

<footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-lg-4 mb-4">
              <h5 className="text-uppercase">About Us</h5>
              <p className="small">
                At Glowing Skincare, we are dedicated to providing premium skincare products and services tailored to your unique needs. Our mission is to empower you to feel confident in your skin every day.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 mb-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="aa" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#offers" className="text-white text-decoration-none">
                    Offers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="aa" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 mb-4">
              <h5 className="text-uppercase">Contact Us</h5>
              <p className="small">
                <strong>Address:</strong> 123 Glowing Lane, Skincare City, SC 45678
              </p>
              <p className="small">
                <strong>Email:</strong> contact@glowingskincare.com
              </p>
              <p className="small">
                <strong>Phone:</strong> +1 (800) 123-4567
              </p>
              <div className="social-icons mt-3">
                <a href="aa" className="text-white me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="aa" className="text-white me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="aa" className="text-white me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="aa" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="mb-0 small">&copy; 2024 Glowing Skincare. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
