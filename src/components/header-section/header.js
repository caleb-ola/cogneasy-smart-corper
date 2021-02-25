import React from "react";
import RubberBand from "react-reveal/RubberBand";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <div className="header-logo">
          <RubberBand>
            <img
              className="logo-mark"
              src="/images/c_logo.png"
              alt="cogneasy logo"
            />
            {/* <img className="word-mark image-fluid" src="/images/cogneasy.png" alt="and wordmark"/>   */}
          </RubberBand>
        </div>
        <div className="header-texts">
          <p>THE SMART CORPER SERIES</p>
          <h1 className="topic">
            Gain skills needed to thrive in life and work.
          </h1>
          <p className="writeup">
            The goal of Smart Corpers is to see that every Nigerian youth has
            in-depth knowledge of the skills and requirements for effective
            performance in the workplace starting with the youths who have
            recently passed out from the mandatory one-year of National Youth
            Service (NYSC).
          </p>
        </div>
        <a href="#register" className="btn header-btn">
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;
