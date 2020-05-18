import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { FaUsers, FaFileAlt, FaFlask, FaGreaterThan } from 'react-icons/fa'

export function Dashboard () {
  return (
    <>
      <section className='dashboard'>

        <Link to='/users'>
          <div className='dashboard-item'>
            <div className='dashboard-item__img'>
              <FaUsers />
            </div>
            <div className='dashboard-item__txt'>
              Usuarios
            </div>
            <div className='dashboard-item__togo'>
              <FaGreaterThan />
            </div>
          </div>
        </Link>
        <Link to='/exams'>
          <div className='dashboard-item'>
            <div className='dashboard-item__img'>
              <FaFileAlt className='dasboard_item__icon' />
            </div>
            <div className='dashboard-item__txt'>
              Exámenes
            </div>
            <div className='dashboard-item__togo'>
              <FaGreaterThan />
            </div>
          </div>
        </Link>
        <Link to='/laboratories'>
          <div className='dashboard-item'>
            <div className='dashboard-item__img'>
              <FaFlask className='dasboard_item__icon' />
            </div>
            <div className='dashboard-item__txt'>
              Laboratorios
            </div>
            <div className='dashboard-item__togo'>
              <FaGreaterThan />
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}
