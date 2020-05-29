import React, { useState, useEffect } from 'react'
import './styles.scss'
import ItemDashboard from '../../components/itemDashboard/index'

export default function Dashboard () {
  const role = 'administrator'
  const [dashboard, setDashboard] = useState([])

  useEffect(() => {
    if (role === 'administrator') {
      setDashboard([
        { icon: 'user', path: '/users', itemText: 'Usuarios' },
        { icon: 'exam', path: '/exams', itemText: 'Exámenes' },
        { icon: 'laboratory', path: '/users', itemText: 'Laboratorios' }
      ])
    } else if (role === 'patient') {
      setDashboard([
        { icon: 'consultation', path: '/myconsultations', itemText: 'Mis consultas' },
        { icon: 'exam', path: '/myexams', itemText: 'Mis Exámenes' }
      ])
    } else {
      // Redirect
    }
  }, [])

  return (
    <section className='dashboard'>
      {dashboard.map((item, index) => <ItemDashboard key={index} {...item} />)}
    </section>
  )
}
