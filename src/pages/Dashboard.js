import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <section>
      <div>
        <button className='button'>
          <Link to='/users'>Usuarios</Link>
        </button>
      </div>
      <div>
        <button className='button'>
          <Link to='/exams'>Examenes</Link>
        </button>
      </div>
      <div>
        <button className='button'>
          <Link to='/laboratories'>Laboratorios</Link>
        </button>
      </div>
    </section>
  )
}
