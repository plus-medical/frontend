import React from 'react'

export function Patient () {
  return (
    <section className='patient'>
      <div className='patient-search'>
        <input
          type='search'
          placeholder='Número de documento'
          aria-label='Numero de documento'
        />
        <button>Buscar</button>

        <h4>Datos del paciente</h4>
        <div className='patient-info'>
          <label>Nombre paciente</label>
          <div>
            <label>Número de documento</label>
          </div>
          <div>
            <label>Edad</label>
          </div>
        </div>

        <h4>Exámenes</h4>
        <ul className='item'>
          <li>
            <div className='item-name'>
              <h5>Exámenes</h5>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
