import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export function Dashboard () {
  return (
    <>
      <h2>Darshboard Admin</h2>
      <section>
        <div>
          <button className='dashboard-item'>
            <Link to='/users'>Usuarios</Link>
          </button>
        </div>
        <div>
          <button className='dashboard-item'>
            <Link to='/exams'>Examenes</Link>
          </button>
        </div>
        <div>
          <button className='dashboard-item'>
            <Link to='/laboratories'>Laboratorios</Link>
          </button>
        </div>
        <h2>Darshboard Patient</h2>

      </section>
      <div>
        <button className='button'>
          <Link to='/exams'>Medical Consults</Link>
        </button>
      </div>
      <div>
        <button className='button'>
          <Link to='/consults'>Examenes</Link>
        </button>
      </div>
    </>
  )
}