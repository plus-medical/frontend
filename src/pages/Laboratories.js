import React from 'react'
import { Link } from 'react-router-dom'

const data = [1, 2, 3]

export const Laboratories = () => {
  return (
    <>
      <section className='laboratories'>
        <div className='laboratory-input'>
          <input
            type='search'
            placeholder='Buscar laboratorio'
            aria-label='busqueda de laboratorios'
          />
          <button className='button'>Buscar</button>
        </div>
        <ul class='list-group'>
          {data.map((id) => (
            <li class='list-item' key={id}>
              <div className='item-name'>
                <h3>{`Laboratory ${id}`}</h3>
              </div>
              <div className='item-nit'>
                <label>{`Laboratory ${id}`}</label>
              </div>
              <div className='item-location'>
                <label>{`Laboratory ${id}`} </label>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Link to='/laboratory'>
          <button className='button'>Crear Laboratory</button>
        </Link>
      </section>
    </>
  )
}
