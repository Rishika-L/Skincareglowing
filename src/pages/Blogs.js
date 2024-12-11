// src/BlogPage.js
import React from 'react';
import Blog1 from "./images/Blog1.jpeg"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Home.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <header className="blog-header text-center">
        <h1>Achieve Glowing Skin: The Ultimate Skincare Routine</h1>
        <p className="blog-subtitle">Your guide to healthy, radiant skin every day</p>
        <div className="text-center mb-4" >
            <img src={Blog1} alt="Cleansing" className="img-fluid rounded" />
          </div>
      </header>

      <section className="blog-content">
        <article className="blog-article">
          <h2>Introduction: Why Glowing Skin Matters</h2>
          <p>
            Glowing skin is often associated with good health, vitality, and beauty. A radiant complexion can boost your confidence and reflect your overall well-being. Whether you're looking to brighten dull skin or maintain a natural glow, a consistent skincare routine is essential.
          </p>
        </article>

        <article className="blog-article">
          <h2>Step 1: Cleanse</h2>
          <p>
            The first step to achieving glowing skin is starting with a clean canvas. Use a gentle cleanser that suits your skin type—whether it’s oily, dry, or sensitive. Avoid harsh soaps that strip your skin of natural oils, as this can lead to irritation and a dull appearance.
          </p>
        </article>

        <article className="blog-article">
          <h2>Step 2: Exfoliate</h2>
          <p>
            Exfoliating is crucial for removing dead skin cells, which can make your skin appear lackluster. Opt for a gentle exfoliant, either chemical (like AHAs or BHAs) or physical (scrubs), depending on your skin's needs. Exfoliate 1-2 times per week for optimal results.
          </p>
        </article>

        <article className="blog-article">
          <h2>Step 3: Hydrate</h2>
          <p>
            Hydration is key to maintaining glowing skin. Use a moisturizer that provides long-lasting hydration and helps lock in moisture. Look for ingredients like hyaluronic acid, glycerin, or ceramides. Don’t forget to hydrate from the inside by drinking plenty of water.
          </p>
        </article>

        <article className="blog-article">
          <h2>Step 4: Protect with Sunscreen</h2>
          <p>
            Sunscreen is one of the most important steps in any skincare routine. UV rays can cause premature aging, dark spots, and damage your skin’s natural glow. Use a broad-spectrum SPF 30 or higher every day, even when it’s cloudy.
          </p>
        </article>

        <article className="blog-article">
          <h2>Step 5: Add Serums and Treatments</h2>
          <p>
            For an extra boost, incorporate serums or treatments with ingredients like vitamin C, retinol, or niacinamide. These help brighten the skin, fade hyperpigmentation, and improve overall texture. Choose serums based on your skin concerns and layer them appropriately.
          </p>
        </article>
      </section>
      
    </div>
  );
};

export default BlogPage;
   