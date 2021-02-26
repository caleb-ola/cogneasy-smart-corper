import React, { useState } from "react";
import { db } from "../../firebase";
import { store } from "react-notifications-component";

import "./footer.css";

const Footer = () => {
  const [address, setAddress] = useState("");

  const takeInput = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Subscribers")
      .add({ address })
      .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
        if (address !== "") {
          store.addNotification({
            title: "Thank you",
            message:
              "You have successfully subscribed, stay tuned for updates on our future events and more",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 10000,
              onScreen: true,
            },
          });

          setAddress("");
        } else {
          store.addNotification({
            title: "Opps",
            message:
              "We are sorry, Something went wrong, please check to ensure your input is neither empty nor incorrect",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        }
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
  };
  return (
    <footer>
      <div class="container footer-container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 sides">
            <p className="footer-text footer-texta">
              Follow us on Social Media
            </p>
            <div className="icons">
              <a href="https://twitter.com/ennovatelab">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://web.facebook.com/Ennovatelab/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/official_ennovatelab/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 sidesr">
            <form onSubmit={handleSubmit}>
              <p className="footer-text footer-textb">
                Be the first to get notified of updates
              </p>
              <div class="row rower">
                <div class="col-lg-8 col-md-12 col-sm-12">
                  <input
                    type="email"
                    value={address}
                    onChange={takeInput}
                    placeholder="Your e-mail address"
                    className="subscribe-input"
                    required
                  />
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 button">
                  <button type="submit" className="btn footer-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
