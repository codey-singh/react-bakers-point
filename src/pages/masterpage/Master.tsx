import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../../components/shared/Header";
import { AboutUs } from "../about-us/AboutUs";
import { Home } from "../home/Home";

export const Master = () => {
  return (
    <>
      <Header showNav={true}></Header>
      <Router>
        <Switch>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};
