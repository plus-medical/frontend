import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Protected from '../Protected'
// import { LayoutMobile } from '../../components/layout'
import { Home } from '../../pages/Home/index'
import { Login } from '../../pages/Login'
import { NotFound } from '../../pages/NotFound'
// import { routes } from '../../routes'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Protected exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
