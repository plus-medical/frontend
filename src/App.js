import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'
import User from './pages/User'
import Exams from './pages/Exams'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/user' component={User} />
        <Route exact path='/exams' component={Exams} />
      </Switch>
    </BrowserRouter>
  )
}
