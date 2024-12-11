// FeedbackForm.js
import React, { useState } from "react";
import "./Home.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    alert(
      `Thank you for your feedback!\n\nDetails:\nName: ${name}\nEmail: ${email}\nRating: ${rating}\nFeedback: ${feedback}`
    );

    console.log({
      name,
      email,
      feedback,
      rating,
    });
  };

  return (
    <div className="feedback-form-container">
      {/* Conditional rendering of Thank you message at the top */}
      {isSubmitted && <p className="thank-you-message">Thank you for your feedback!</p>}

      <h2>Skincare Product Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="input-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="rating">Rate the Product:</label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={`submit-btn ${isSubmitted ? "submitted" : ""}`}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
