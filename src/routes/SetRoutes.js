import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Protection from './Protection'
import Home from '../pages/Home/index'
import Login from '../pages/Login/index'
import { NotFound } from '../pages/NotFound/index'
import LayoutMobile from '../components/layout/index'
import { ListRoutes } from './ListRoutes'

export const SetRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <LayoutMobile>
          {ListRoutes.map((route, index) => (
            <Protection
              exact
              path={route.path}
              key={index}
              component={route.component}
            />
          )
          )}
        </LayoutMobile>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
