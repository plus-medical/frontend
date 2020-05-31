import Dashboard from '../pages/Dashboard/index'
import Users from '../pages/SearchUsers/index'
import User from '../pages/User/index'
import Exams from '../pages/SearchExams/index'
import Exam from '../pages/Exam/index'
import Laboratories from '../pages/SearchLaboratories/index'
import SearchPatient from '../pages/SearchPatient/index'
import ClinicHistory from '../pages/ClinicHistory/index'
import MedicalConsultation from '../pages/MedicalConsultation/index'
import DetailPatientExam from '../pages/DetailPatientExam'
import Laboratory from '../pages/Laboratory/index'
import LaboratoryExam from '../pages/LaboratoryExam/index'
import LaboratoryResult from '../pages/LaboratoryResult/index'
import UploadUsers from '../pages/UploadUsers/index'
import DownloadFiles from '../pages/DownloadFiles/index'
import Consultation from '../pages/Consultations/index'
import Notifications from '../pages/Notifications/index'
import Profile from '../pages/Profile/index'


export const ListRoutes = [
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
    path: '/users/:search',
    exact: true,
    component: Users
  },
  {
    path: '/user/:id',
    exact: true,
    component: User
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
    path: '/exam/:id',
    exact: true,
    component: Exam
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
    path: '/laboratory/:id',
    exact: true,
    component: Laboratory
  },
  {
    path: '/laboratory',
    exact: true,
    component: Laboratory
  },
  {
    path: '/search',
    exact: true,
    component: SearchPatient
  },
  {
    path: '/clinichistory/:id',
    exact: true,
    component: ClinicHistory
  },
  {
    path: '/medicalconsultation/:id',
    exact: true,
    component: MedicalConsultation
  },
  {
    path: '/detailexam/:id',
    exact: true,
    component: DetailPatientExam
  },
  {
    path: '/laboratoryexam',
    exact: true,
    component: LaboratoryExam
  },
  {
    path: '/laboratoryresult/:id',
    exact: true,
    component: LaboratoryResult
  },
  {
    path: '/uploadusers',
    exact: true,
    component: UploadUsers
  },
  {
    path: '/myexams',
    exact: true,
    component: LaboratoryExam
  },
  {
    path: '/myexam/:id',
    exact: true,
    component: DownloadFiles
  },
  {
    path: '/myconsultations',
    exact: true,
    component: Consultation
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: '/notifications',
    exact: true,
    component: Notifications
  }

]
