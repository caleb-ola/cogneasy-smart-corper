import React, { useState, useEffect } from "react";
import "./schedule-section/schedule.css";
import Details from "./details";
import Bounce from "react-reveal/Bounce";

const Focus = () => {
  const [detail, setDetail] = useState();
  const [day, setDay] = useState({
    dayOne: "active",
    dayTwo: "",
    dayThree: "",
  });

  const showDayOne = () => {
    setDay({
      dayOne: "active",
      dayTwo: "",
      dayThree: "",
    });
    setDetail(
      <div>
        <Bounce>
          <Details
            time={"4PM - 4:45PM (GMT+1)"}
            topic={"Discover Your Why"}
            speaker={"DAYO SALAKO"}
            text={
              "Steps to Understanding Your Purpose, Crafting Your Core Values"
            }
          />
          <Details
            time={"5PM - 5:45 PM (GMT+1)"}
            topic={
              "From Novice to C-Suite: Strategies to building a great career"
            }
            speaker={"SEUN ADEPOJU"}
            text={
              "Communicate like a Genius Become the Recruiter's Favourite Ace Your Job Interview"
            }
          />
        </Bounce>
      </div>
    );
  };
  useEffect(() => {
    return showDayOne();
  }, []);

  const showDayTwo = () => {
    setDay({
      dayOne: "",
      dayTwo: "active",
      dayThree: "",
    });

    setDetail(
      <div>
        <Bounce>
          <Details
            time={"4:00PM - 4:35PM (GMT+1) Venue: Zoom"}
            topic={"Money Smart"}
            speaker={"CALEB DADA"}
            text={"Introduction to Financial Intelligence"}
          />
        </Bounce>
        <Bounce>
          <Details
            time={"4:40PM-5:25PM (GMT+1) Venue: Zoom"}
            topic={"Turning your Craft to Profit"}
            speaker={"DEBORAH ODUALE"}
            text={"Practical and simple steps to profit from your craft"}
          />
        </Bounce>
        <Bounce>
          <Details
            time={"5:20PM -5:55PM (GMT+1) Venue: Zoom"}
            topic={" Breaking the Einstein Code"}
            speaker={"JESUDAMILARE ADESEGUN-DAVID"}
            text={"Proven Strategies to Productive Thinking"}
          />
        </Bounce>
      </div>
    );
  };
  const showDayThree = () => {
    setDay({
      dayOne: "",
      dayTwo: "",
      dayThree: "active",
    });
    setDetail(
      <div>
        <Bounce>
          <Details
            time={"4:00PM - 4:35PM (GMT+1)Venue: Zoom"}
            topic={" Building a Profitable Business"}
            speaker={"CHIMA OMIKE"}
            text={"How To Map Out Your Business Idea"}
          />
        </Bounce>
        <Bounce>
          <Details
            time={" 4:40PM -5:25PM (GMT+1) Venue: Zoom"}
            topic={"The Most Important Social Capital to Have"}
            speaker={"JESUDAMILARE ADESEGUN-DAVID"}
            text={"The Gift of Access: Networking for Growth"}
          />
        </Bounce>
      </div>
    );
  };

  return (
    <div className="focus">
      <nav className="navbar navbar-expand  navbar-light new-Nav">
        <div className="mx-auto" id="">
          <ul className="navbar-nav  nav-fill w-100  mx-auto navbar-dark">
            <li className={`nav-item new-item ${day.dayOne}`}>
              <button className="nav-link naval " onClick={showDayOne}>
                <div className="power">
                  Day 1 <br /> Thurs, March 4
                </div>
              </button>
            </li>
            <li className={`nav-item new-item ${day.dayTwo}`}>
              <button className={`nav-link naval `} onClick={showDayTwo}>
                <div className="power">
                  Day 2 <br /> Fri, March 5
                </div>
              </button>
            </li>
            <li className={`nav-item new-item ${day.dayThree}`}>
              <button className={`nav-link naval `} onClick={showDayThree}>
                <div className="power">
                  Day 3 <br /> Sat, March 6
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {detail}
    </div>
  );
};

export default Focus;
