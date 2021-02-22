import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { store } from "react-notifications-component";
import { firebase } from "../firebase";

import "./footer-section/footer.css";
import "./app.css";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [client, setClient] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const handleEmail = (e) => {
    setClient((prev) => ({
      email: e.target.value,
      password: prev.password,
    }));
  };

  const handlePassword = (e) => {
    setClient((prev) => ({
      email: prev.email,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(client.email, client.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log(user);
        setIsLoggedIn(true);
        history.push("/admiral/admin/dash", isLoggedIn);
        // store.addNotification({
        //   title: "Thank you",
        //   message: "Sign In Successfull",
        //   type: "success",
        //   insert: "top",
        //   container: "top-right",
        //   animationIn: ["animate__animated", "animate__fadeIn"],
        //   animationOut: ["animate__animated", "animate__fadeOut"],
        //   dismiss: {
        //     duration: 10000,
        //     onScreen: true,
        //   },
        // });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        store.addNotification({
          title: "Opps",
          message: errorMessage,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 10000,
            onScreen: true,
          },
        });
      });
  };

  return (
    <div className="focus miral">
      <img src="/images/logo.png" />
      {/* {console.log(user)} */}
      <h1>Admin session sign in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="subscribe-input"
          value={client.email}
          onChange={handleEmail}
        />
        <input
          type="password"
          className="subscribe-input"
          value={client.password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn footer-btn mx-auto">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Admin;
