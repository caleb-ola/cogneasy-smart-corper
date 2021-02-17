import React from "react";
import "./schedule.css";
import Bounce from "react-reveal/Bounce";

// COMPONENTS
import Focus from "../focus";

const Schedule = () => {
  return (
    <div className="schedule">
      <Bounce right duration={3000}>
        <img
          className="vector-one"
          src="/images/sidea.png"
          alt="cogneasy-logo"
        />
      </Bounce>

      <div className="register-header">
        <h1 className="speakers-header">
          The Main Focus is to equip every Corper with the 10 Must Have Skills
        </h1>
        <p className="speakers-text">Schedule and Agenda for Smart Corpers .</p>
      </div>
      <Bounce left duration={2500}>
        <img
          className="vector-two"
          src="/images/sideb.png"
          alt="cogneasy-logo"
        />
      </Bounce>
      <div className="schedule-body">
        <Focus />
      </div>
      <Bounce right duration={2500}>
        <img
          className="vector-three"
          src="/images/sidea.png"
          alt="cogneasy-logo"
        />
      </Bounce>
      <Bounce left duration={3000}>
        <img
          className="vector-four"
          src="/images/sideb.png"
          alt="cogneasy-logo"
        />
      </Bounce>
    </div>
  );
};

export default Schedule;
