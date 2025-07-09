import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="big-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Men's Store</h3>
          <p>Your one-stop destination for premium men's fashion. Quality products, great prices.</p>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Jackets</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Men's Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
