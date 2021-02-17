import React from "react";
import "./schedule.css";
import Bounce from "react-reveal/Bounce";

// COMPONENTS
import Focus from "../focus";

const Schedule = () => {
  return (
    <div className="schedule">
      <img className="vector-one" src="/images/sidea.png" alt="cogneasy-logo" />

      <div className="register-header">
        <h1 className="speakers-header">
          The Main Focus is to equip
          <br /> Every Corper with the 10 Must Have Skills
        </h1>
        <p className="speakers-text">Schedule and Agenda for Smart Corpers .</p>
      </div>

      <img className="vector-two" src="/images/sideb.png" alt="cogneasy-logo" />
      <div className="schedule-body">
        <Focus />
      </div>
      <img className="vector-one" src="/images/sidea.png" alt="cogneasy-logo" />
      <img className="vector-two" src="/images/sidea.png" alt="cogneasy-logo" />
    </div>
  );
};

export default Schedule;
