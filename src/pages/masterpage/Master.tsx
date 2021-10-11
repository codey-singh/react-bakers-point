import React from "react";
import { Switch } from "react-router-dom";
import { InternalRoute, RouteWithSubRoutes } from "../../App";
import { Footer } from "../../components/shared/Footer";
import { Header } from "../../components/shared/Header";


interface MasterProps {
  hideNav: boolean,
  routes: InternalRoute[]
}

export const Master = (props: MasterProps) => {
  const {hideNav, routes} = props;

  return (
    <>
      <Header hideNav={hideNav}></Header>
      <Switch>
        {routes.map((route: InternalRoute, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <Footer></Footer>
    </>
  );
};
