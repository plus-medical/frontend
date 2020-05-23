import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { LayoutMobile } from './components/layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login/index'
import { Dashboard } from './pages/Dashboard/index'
import { Users } from './pages/SearchUsers/index'
import { User } from './pages/User'
import { Exams } from './pages/SearchExams/index'
import { Exam } from './pages/Exam/index'
import { Laboratories } from './pages/SearchLaboratories/index'
import { SearchPatient } from './pages/SearchPatient/index'
import { ClinicHistory } from './pages/ClinicHistory/index'
import { MedicalConsultation } from './pages/MedicalConsultation/index'
import { DetailPatientExam } from './pages/DetailPatientExam'
import { Laboratory } from './pages/Laboratory'
import { LaboratoryExam } from './pages/LaboratoryExam'

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
          <Route exact path='/laboratories' component={Laboratories} />
          <Route exact path='/laboratoryexam' component={LaboratoryExam} />
          <Route exact path='/searchpatient' component={SearchPatient} />
          <Route exact path='/clinichistory' component={ClinicHistory} />
          <Route exact path='/medicalconsultation' component={MedicalConsultation} />
          <Route exact path='/detailexam' component={DetailPatientExam} />
          <Route exact path='/laboratory' component={Laboratory} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </LayoutMobile>
    </BrowserRouter>
  )
}
