import React from "react";
import { Route, Redirect, useLocation, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const history = useHistory();
  console.log(useHistory());

  return (
    <Route {...rest}>
      {history.action === "PUSH" ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/admiral/admin", state: { from: location } }}
        />
      )}
    </Route>
  );
};

export default PrivateRoute;
