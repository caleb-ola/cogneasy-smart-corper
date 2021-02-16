import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase } from "../firebase";

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
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div>
      {/* {console.log(user)} */}
      <form onSubmit={handleSubmit}>
        <input type="email" value={client.email} onChange={handleEmail} />
        <input
          type="password"
          value={client.password}
          onChange={handlePassword}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Admin;
