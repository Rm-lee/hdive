import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-nav-items">
        <li>Sign Up</li>
        <li>|</li>
        <li>Help Center</li>
        <li>|</li>
        <li>About Us</li>
        <li>|</li>
        <li>Contact Us</li>
        <li>|</li>
        <li>Careers</li>
        <li>|</li>
        <li>Privacy Policy</li>
        <li>|</li>
        <li>Terms of Use</li>
        <li>|</li>
        <li>Press</li>
        <li>|</li>
        <li>Devices</li>
        <li>|</li>
        <li>Accessibility</li>
        <li>|</li>
        <li>Sitemap</li>
      </ul>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitterSquare} />
        <FontAwesomeIcon icon={faYoutubeSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
    </div>
  );
}
