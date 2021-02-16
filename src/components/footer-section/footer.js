import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-lg-4 col-md-8 col-sm-12 sides">
          <p className="footer-text">Follow us on Social Media</p>
          <div className="icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 sides">
          <form>
            <p className="footer-text">
              Be the first to get notified of updates
            </p>
            <input
              type="text"
              placeholder="your e-mail address"
              className="subscribe-input"
            />
            <button className="btn footer-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
