import React from "react";
import { socialMediaLinks } from "../constants";
import "./SocialMediaLinks.css"; // Import the CSS file

const SocialMediaLinks = () => {
  return (
    <div className="social-media-container">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <img src={link.icon} alt={link.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;