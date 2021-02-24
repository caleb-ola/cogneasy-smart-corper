import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import App from "./components/app";
import Admin from "./components/admin";
import Dashboard from "./components/dashboard";
import Bio from "./components/bio";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/admiral/admin/dash" component={Dashboard} />
      <Route path="/admiral/admin" component={Admin} />
      <Route path="/bio" component={Bio} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
