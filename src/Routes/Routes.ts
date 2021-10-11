import { AboutUs } from "../pages/about-us/AboutUs";
import { ContactUs } from "../pages/contact-us/ContactUs";
import { Faqs } from "../pages/faqs/Faqs";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Master } from "../pages/masterpage/Master";
import { Products } from "../pages/products/Products";
import { Register } from "../pages/register/Register";

export interface InternalRoute{
  path : string,
  component: React.Component,
  routes: InternalRoute[],
}

export const routes = [
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