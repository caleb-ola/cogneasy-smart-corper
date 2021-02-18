import React from "react";
import "./schedule.css";
import Fade from "react-reveal/Fade";

// COMPONENTS
import Focus from "../focus";

const Schedule = () => {
  return (
    <div className="schedule">
      <Fade right duration={3000}>
        <img
          className="vector-one"
          src="/images/sidea.png"
          alt="cogneasy-logo"
        />
      </Fade>

      <div className="register-header">
        <h1 className="speakers-header">
          The Main Focus is to equip every Corper with the 10 Must Have Skills
        </h1>
        <p className="speakers-text">Schedule and Agenda for Smart Corpers .</p>
      </div>
      <Fade left duration={2000}>
        <img
          className="vector-two"
          src="/images/sideb.png"
          alt="cogneasy-logo"
        />
      </Fade>
      <div className="schedule-body">
        <Focus />
      </div>
      <Fade right duration={2000}>
        <img
          className="vector-three"
          src="/images/sidea.png"
          alt="cogneasy-logo"
        />
      </Fade>
      <Fade left duration={3000}>
        <img
          className="vector-four"
          src="/images/sideb.png"
          alt="cogneasy-logo"
        />
      </Fade>
    </div>
  );
};

export default Schedule;
