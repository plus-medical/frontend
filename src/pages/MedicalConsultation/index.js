import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

export function MedicalConsultation () {
  return (
    <form className='MedicalConsultation form-section'>
      <label className='MedicalConsultation__item'>Consulta</label>
      <input
        type='text'
        placeholder='Razon de la consulta'
        aria-label='Razon de la consulta'
        className='form-input'
      />

      <input
        type='text'
        placeholder='exploración'
        aria-label='exploración'
        className='form-input'
      />
      <input
        type='text'
        placeholder='analisis'
        aria-label='analisis'
        className='form-input'
      />
      <input
        type='text'
        placeholder='diagnostico'
        aria-label='diagnostico'
        className='form-input'
      />
      <input
        type='text'
        placeholder='evolucion'
        aria-label='evolucion'
        className='form-input'
      />
      <input
        type='text'
        placeholder='orden medica'
        aria-label='orden medica'
        className='form-input'
      />
      <input
        type='text'
        placeholder='farmacologia'
        aria-label='farmacologia'
        className='form-input'
      />
      <input
        type='search'
        placeholder='busqueda de examenes'
        aria-label='busqueda de examenes'
        className='form-input'
      />

      <div className='form-section__buttons'>
        <Link to='/'>
          <button className='form-button secondary'>Cancelar </button>
        </Link>
        <button className='form-button primary'>Guardar</button>
      </div>
    </form>
  )
}
