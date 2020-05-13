import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import Users from './pages/Users'
import User from './pages/User'
import Exams from './pages/Exams'
import { Exam } from './pages/Exam'
import { Laboratories } from './pages/Laboratories'
import UserProfile from './pages/UserProfile'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/user' component={User} />
        <Route exact path='/exams' component={Exams} />
        <Route exact path='/exam' component={Exam} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/laboratories' component={Laboratories} />
        <Route exact path='/userprofile' component={UserProfile} />
      </Switch>
    </BrowserRouter>
  )
}
