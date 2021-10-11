import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Footer } from "../../components/shared/Footer";
import { Header } from "../../components/shared/Header";
import { AboutUs } from "../about-us/AboutUs";
import { ContactUs } from "../contact-us/ContactUs";
import { Faqs } from "../faqs/Faqs";
import { Home } from "../home/Home";
import { Products } from "../products/Products";

export const Master = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Header showNav={true}></Header>
      <Switch>
        <Route path={path} exact component={Home}></Route>
        <Route path={`${path}/about-us`} component={AboutUs}></Route>
        <Route path={`${path}/faqs`} component={Faqs}></Route>
        <Route path={`${path}/products`} component={Products}></Route>
        <Route path={`${path}/contact-us`} component={ContactUs}></Route>
        <Route path={`${path}/home`} component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
};
