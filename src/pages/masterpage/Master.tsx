import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Header } from "../../components/shared/Header";
import { AboutUs } from "../about-us/AboutUs";
import { ContactUs } from "../contact-us/ContactUs";
import { Faqs } from "../faqs/Faqs";
import { Home } from "../home/Home";
import { Products } from "../products/Products";

export const Master = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Header showNav={true}></Header>
      <Router>
        <Switch>
          <Route path={`${path}/about-us`} component={AboutUs}></Route>
          <Route path={`${path}/faqs`} component={Faqs}></Route>
          <Route path={`${path}/products`} component={Products}></Route>
          <Route path={`${path}/contact-us`} component={ContactUs}></Route>
          <Route path={`${path}/home`} component={Home}></Route>
          <Route path={`${path}`} component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};
