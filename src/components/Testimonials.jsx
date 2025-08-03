import React from "react";
import { testimonials } from "../constants";
import "./Testimonials.css"; // ← Import the CSS here

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <p className="testimonial-text">{item.testimonial}</p>
          <div className="testimonial-author">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <strong>{item.name}</strong>
              <div>{item.designation} — {item.company}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
