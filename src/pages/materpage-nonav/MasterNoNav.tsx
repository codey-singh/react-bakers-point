import React from 'react'
import { Footer } from '../../components/shared/Footer'
import {Header} from '../../components/shared/Header'
import { Login } from '../../pages/login/Login';

import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Home } from '../home/Home';


export const MasterNoNav = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Header showNav={false}></Header>
      <Router>
        <Switch>
          <Route path={path} exact component={Login}></Route>
          <Route path={`${path}/login`} component={Login}></Route>
          <Route path={`${path}/register`} component={Home}></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  )
}
