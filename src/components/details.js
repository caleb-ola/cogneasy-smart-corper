import React from "react";
import "./schedule-section/schedule.css";

const Details = (props) => {
  return (
    <div className="row details">
      <div className="col-4">
        <p className="time">{props.time}</p>
      </div>
      <div className="col-8">
        <div>
          <h5 className="focus-topic">{props.topic}</h5>
        </div>
        <div>
          <p>
            <p className="focus-text">{props.text}</p>
          </p>
        </div>
        <div>
          <small className="focus-speaker">{props.speaker}</small>
        </div>
      </div>
    </div>
  );
};

export default Details;
