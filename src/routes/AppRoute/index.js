import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../PrivateRoute/index'
import { LayoutMobile } from '../../components/layout'
import { Home } from '../../pages/Home/index'
import { Login } from '../../pages/Login'
import { NotFound } from '../../pages/NotFound'
import { routes } from '../../routes'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <LayoutMobile>
          <Route exact path='/login' component={Login} />
          {routes.map((route, index) => {
            return <PrivateRoute key={index} {...route} />
          }
          )}
        </LayoutMobile>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
