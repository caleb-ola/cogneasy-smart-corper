import React, { useState } from "react";
import "./register.css";
import { db } from "../../firebase";
import { store } from "react-notifications-component";

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    num: "",
    exp: "",
  });
  // const [allUsers, setAllUsers] = useState([]);

  const handleFname = (e) => {
    const { value } = e.target;
    setUser((prev) => ({
      fname: value,
      lname: prev.lname,
      email: prev.email,
      num: prev.num,
      exp: prev.exp,
    }));
  };
  const handleLname = (e) => {
    const { value } = e.target;
    setUser((prev) => ({
      fname: prev.fname,
      lname: value,
      email: prev.email,
      num: prev.num,
      exp: prev.exp,
    }));
  };
  const handleEmail = (e) => {
    const { value } = e.target;
    setUser((prev) => ({
      fname: prev.fname,
      lname: prev.lname,
      email: value,
      num: prev.num,
      exp: prev.exp,
    }));
  };
  const handleNum = (e) => {
    const { value } = e.target;
    setUser((prev) => ({
      fname: prev.fname,
      lname: prev.lname,
      email: prev.email,
      num: value,
      exp: prev.exp,
    }));
  };
  const handleExp = (e) => {
    const { value } = e.target;
    setUser((prev) => ({
      fname: prev.fname,
      lname: prev.lname,
      email: prev.email,
      num: prev.num,
      exp: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Corpers")
      .add(user)
      .then((docRef) => {
        store.addNotification({
          title: "Thank you",
          message:
            "You have successfully registered, see you soon, you can proceed to subscribe for more updates from us for upcomming events",
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
        setUser({
          fname: "",
          lname: "",
          email: "",
          num: "",
          exp: "",
        });
      })
      .catch((error) => {
        // console.log("Error adding document: ", error);
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
      });
  };

  return (
    <section id="register" className="register">
      <div className="register-details">
        <div className="register-header">
          <div className="speakers">
            <h1 className="register-header">Register Now</h1>
            <p className="register-text">
              Fill in your details to reserve a space for the virtual event.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 input-field">
              <label for="fname">First Name</label>
              <input
                id="fname"
                type="text"
                placeholder="FirstName"
                value={user.fname}
                onChange={handleFname}
                required
              />
            </div>
            <div className="col-lg-6 input-field">
              <label for="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Last Name"
                value={user.lname}
                onChange={handleLname}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 input-field">
              <label for="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleEmail}
                required
              />
            </div>
            <div className="col-lg-6 input-field">
              <label for="num">Phone Number</label>
              <input
                id="num"
                type="tel"
                placeholder="Phone Number"
                value={user.num}
                onChange={handleNum}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 input-field text-area">
              <label className="exp-label" for="exp">
                What are your expectations?
              </label>
              <textarea
                id="exp"
                placeholder="type what you expect from Smart Corpers"
                value={user.exp}
                onChange={handleExp}
                required
              ></textarea>
            </div>
          </div>
          <div className="submit-button">
            <button type="submit" className=" btn header-btn">
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
