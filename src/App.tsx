import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {routes} from "./Routes/Routes";
import { RouteWithSubRoutes } from "./Routes/RouteWithSubRoutes";

export const App = () => {
  return (
    <Router>
      <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
};
