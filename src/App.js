import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { LayoutMobile } from './components/templates/layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { User } from './pages/User'
import { Exams } from './pages/Exams'
import { Exam } from './pages/Exam'
import { Laboratories } from './pages/Laboratories'
import { UserProfile } from './pages/UserProfile'
import { Clinichistory } from './pages/Clinichistory'
import { Detailpatientexam } from './pages/Detailpatientexam'
import { Laboratory } from './pages/Laboratory'
import { Patient } from './pages/Patient'

export const App = () => {
  return (
    <BrowserRouter>
      <LayoutMobile>
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
          <Route exact path='/clinichistory' component={Clinichistory} />
          <Route exact path='/detailexam' component={Detailpatientexam} />
          <Route exact path='/laboratory' component={Laboratory} />
          <Route exact path='/patient' component={Patient} />
        </Switch>
      </LayoutMobile>
    </BrowserRouter>
  )
}
