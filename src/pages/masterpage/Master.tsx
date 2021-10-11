import React from "react";
import { Switch } from "react-router-dom";
import { Footer } from "../../components/shared/Footer";
import { Header } from "../../components/shared/Header";
import { InternalRoute } from "../../Routes/Routes";
import { RouteWithSubRoutes } from "../../Routes/RouteWithSubRoutes";


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
