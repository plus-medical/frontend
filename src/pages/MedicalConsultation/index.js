import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

export function MedicalConsultation () {
  return (
    <form className='MedicalConsultation form-section'>
      <label className='MedicalConsultation__item'>Consulta</label>
      <input
        type='text'
        placeholder='Razón de la consulta'
        aria-label='Razón de la consulta'
        className='form-input'
      />

      <input
        type='text'
        placeholder='Exploración'
        aria-label='Exploración'
        className='form-input'
      />
      <input
        type='text'
        placeholder='Análisis'
        aria-label='Análisis'
        className='form-input'
      />
      <input
        type='text'
        placeholder='Diagnóstico'
        aria-label='Diagnóstico'
        className='form-input'
      />
      <input
        type='text'
        placeholder='Evolución'
        aria-label='Evolución'
        className='form-input'
      />
      <input
        type='text'
        placeholder='Orden Médica'
        aria-label='Orden Médica'
        className='form-input'
      />
      <input
        type='text'
        placeholder='Farmacología'
        aria-label='Farmacología'
        className='form-input'
      />
      <input
        type='search'
        placeholder='Busqueda de Exámenes'
        aria-label='Busqueda de Exámenes'
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
