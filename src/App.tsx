import React from "react";
import "./App.css";
import { Master } from "./pages/masterpage/Master";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { AboutUs } from "./pages/about-us/AboutUs";
import { Faqs } from "./pages/faqs/Faqs";
import { Products } from "./pages/products/Products";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { Home } from "./pages/home/Home";

export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export interface InternalRoute{
  path : string,
  component: React.Component,
  routes: InternalRoute[],
}
export const App = () => {
//   <Route path={`${path}/about-us`} component={AboutUs}></Route>
//   <Route path={`${path}/faqs`} component={Faqs}></Route>
//   <Route path={`${path}/products`} component={Products}></Route>
//   <Route path={`${path}/contact-us`} component={ContactUs}></Route>
//   <Route path={`${path}/home`}

  const routes = [
    {
      path: "/",
      component: Master,
      routes: [
        {
          path: "/about-us",
          component: AboutUs
        },
        {
          path: "/faqs",
          component: Faqs
        },
        {
          path: "/products",
          component: Products
        },
        {
          path: "/contact-us",
          component: ContactUs
        },
        {
          path: "/account/register",
          component: Register,
          showNav: false
        },
        {
          path: "/account/login",
          component: Login,
          showNav: false
        },
        {
          path: "/",
          component: Home
        },]
    },
    
  ];

  return (
    <Router>
      <Switch>
      <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        {/* <Route path="/account" component={MasterNoNav}></Route>
        <Route path="/" component={Master}></Route> */}
      </Switch>
    </Router>
  );
};
