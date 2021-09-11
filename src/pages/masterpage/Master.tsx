import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Carousel } from '../../components/shared/Carousel'
import Header from '../../components/shared/Header'
import { Order } from '../../components/shared/Order'
import { Home } from '../home/Home'

export const Master = () => {
  return (
    <>
    <Header showNav={true}></Header>
    <Carousel></Carousel>
    <Order></Order>
    <Router>
        <Switch>
          <Route path='/' component={Home}></Route>
        </Switch>
    </Router>
    </>
  )
}
