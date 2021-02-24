import React from "react";
import { Link } from "react-router-dom";

import "./speakers.css";
import SpeakerDetails from "./speakerDetails";

const Speakers = () => {
  return (
    <div id="speakers" className="speakers-section">
      <div className="speakers">
        <h1 className="speakers-header">Meet Our Speakers</h1>
        <p className="speakers-text">
          We have handpicked industry experts who will share with you things
          they’ve learnt on their journey.
        </p>
      </div>
      <div className="all-speakers">
        <SpeakerDetails />
      </div>
      <div className="bio-link">
        <Link to="/bio">
          <div className="bio-linkage">
            <strong>{"View speakers' bio>"}</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Speakers;
