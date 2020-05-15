import React from 'react'
import { Link } from 'react-router-dom'

export function Exams () {
  return (
    <>
      <section className='exams'>
        <form className='input'>
          <input type='search' placeholder='Examen' aria-label='Examen' />
        </form>
        <ul className='item'>
          <li>
            <div className='item-name'>
              <h5>name exam</h5>
            </div>
            <div className='item-dni'>
              <label>1234322</label>
            </div>
            <div className='item-state'>
              <select name='status'>
                <option value='1'>activo</option>
                <option value='2'>Inactivo</option>
              </select>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <Link to='/exam'>
          <button className='button'>Crear examen</button>
        </Link>
      </section>
    </>
  )
}
