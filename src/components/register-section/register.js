import React, { useState } from "react";
import "./register.css";
import { db } from "../../firebase";
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
    db.collection("Test")
      .add(user)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setUser({
          fname: "",
          lname: "",
          email: "",
          num: "",
          exp: "",
        });
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
  };

  return (
    <section id="register" className="register">
      <div className="register-details">
        <div className="register-header">
          <div className="speakers">
            <h1 className="speakers-header">Register Now</h1>
            <p className="speakers-text">
              Fill in your details to reserve a pace for the virtual event.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 input-field">
              <p>First Name</p>
              <input
                type="text"
                placeholder="FirstName"
                value={user.fname}
                onChange={handleFname}
              />
            </div>
            <div className="col-lg-6 input-field">
              <p>Second Name</p>
              <input
                type="text"
                placeholder="Last Name"
                value={user.lname}
                onChange={handleLname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 input-field">
              <p>Email Address</p>
              <input
                type="text"
                placeholder="Email Address"
                value={user.email}
                onChange={handleEmail}
              />
            </div>
            <div className="col-lg-6 input-field">
              <p>Phone Number</p>
              <input
                type="text"
                placeholder="Phone Number"
                value={user.num}
                onChange={handleNum}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 input-field text-area">
              <p>What are your expectations?</p>
              <textarea
                placeholder="type what you expect from Smart Corpers"
                value={user.exp}
                onChange={handleExp}
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
