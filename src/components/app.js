import React from "react";
import ReactNotification from "react-notifications-component";

//CSS
import "./app.css";
import "react-notifications-component/dist/theme.css";

//COMPONENTS
import Header from "./header-section/header";
import Speakers from "./speakers-section/speakers";
import Schedule from "./schedule-section/schedule";
import Register from "./register-section/register";
import Footer from "./footer-section/footer";

const App = () => {
  return (
    <div>
      <ReactNotification />
      <Header />
      <Speakers />
      <Schedule />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
