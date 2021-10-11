import React from "react";
import "./App.css";
import { Master } from "./pages/masterpage/Master";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MasterNoNav } from "./pages/materpage-nonav/MasterNoNav";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/account" component={MasterNoNav}></Route>
        <Route path="/" component={Master}></Route>
      </Switch>
    </Router>
  );
};
