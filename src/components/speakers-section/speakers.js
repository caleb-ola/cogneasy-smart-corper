import React from "react";
import "./speakers.css";
import SpeakerDetails from "./speakerDetails";

const Speakers = () => {
  return (
    <div className="speakers-section">
      <div className="speakers">
        <h1 className="speakers-header">Meet Our Speakers</h1>
        <p className="speakers-text">
          We have handpicked industry experts who will share
          <br /> with you things they’ve learnt on their journey.
        </p>
      </div>
      <div className="all-speakers">
        <SpeakerDetails />
      </div>
    </div>
  );
};

export default Speakers;
