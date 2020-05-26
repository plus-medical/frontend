import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Protection from './Protection'
// import { LayoutMobile } from '../../components/layout'
import { Home } from '../pages/Home/index'
import { Login } from '../pages/Login/index'
import { NotFound } from '../pages/NotFound/index'
import { ListRoutes } from './ListRoutes'

export const SetRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Protection exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
