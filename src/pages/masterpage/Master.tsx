import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Header } from "../../components/shared/Header";
import { AboutUs } from "../about-us/AboutUs";
import { ContactUs } from "../contact-us/ContactUs";
import { Faqs } from "../faqs/Faqs";
import { Home } from "../home/Home";
import { Products } from "../products/Products";

export const Master = () => {
  return (
    <>
      <Header showNav={true}></Header>
      <Router>
        <Switch>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/faq" component={Faqs}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};
