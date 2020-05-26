import { Dashboard } from '../pages/Dashboard'
import { Users } from '../pages/SearchUsers/index'
import { User } from '../pages/User'
import { Exams } from '../pages/SearchExams/index'
import { Exam } from '../pages/Exam/index'
import { Laboratories } from '../pages/SearchLaboratories/index'
import { SearchPatient } from '../pages/SearchPatient/index'
import { ClinicHistory } from '../pages/ClinicHistory/index'
import { MedicalConsultation } from '../pages/MedicalConsultation/index'
import { DetailPatientExam } from '../pages/DetailPatientExam'
import { Laboratory } from '../pages/Laboratory'
import { LaboratoryExam } from '../pages/LaboratoryExam'
import { LaboratoryResult } from '../pages/LaboratoryResult'

export const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
  {
    path: '/users',
    exact: true,
    component: Users
  },
  {
    path: '/user',
    exact: true,
    component: User
  },
  {
    path: '/exams',
    exact: true,
    component: Exams
  },
  {
    path: '/exam',
    exact: true,
    component: Exam
  },
  {
    path: '/laboratories',
    exact: true,
    component: Laboratories
  },
  {
    path: '/search',
    exact: true,
    component: SearchPatient
  },
  {
    path: '/clinichistory',
    exact: true,
    component: ClinicHistory
  },
  {
    path: '/medicalconsultation',
    exact: true,
    component: MedicalConsultation
  },
  {
    path: '/detailexam',
    exact: true,
    component: DetailPatientExam
  },
  {
    path: '/laboratory',
    exact: true,
    component: Laboratory
  },
  {
    path: '/laboratoryexam',
    exact: true,
    component: LaboratoryExam
  },
  {
    path: '/laboratoryresult',
    exact: true,
    component: LaboratoryResult
  }
]
