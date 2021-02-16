import React from "react";
import "./schedule.css";
import Bounce from "react-reveal/Bounce";

// COMPONENTS
import Focus from "../focus";

const Schedule = () => {
  return (
    <div className="schedule">
      <Bounce right duration={2000}>
        <img
          className="vector-one"
          src="/images/sidelogo1.png"
          alt="cogneasy-logo"
        />
      </Bounce>

      <div className="register-header">
        <h1 className="speakers-header">
          The Main Focus is to equip
          <br /> Every Corper with the 10 Must Have Skills
        </h1>
        <p className="speakers-text">Schedule and Agenda for Smart Corpers .</p>
      </div>
      <Bounce left duration={3000}>
        <img
          className="vector-two"
          src="/images/sidelogo2.png"
          alt="cogneasy-logo"
        />
      </Bounce>

      <div className="schedule-body">
        <Focus />
      </div>
    </div>
  );
};

export default Schedule;
