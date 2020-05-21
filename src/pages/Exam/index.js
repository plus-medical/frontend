import React from 'react'
import { Link } from 'react-router-dom'

export function Exam () {
  return (
    <form>
      <div className='form-section'>
        <div className='form-section__title'>Crear Examen</div>
        <div className='form-group'>
          <input
            type='text'
            id='exam-name'
            className='form-input'
            aria-label='Nombre del examen'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='exam-name'>Examen</label>
        </div>
        <div className='item-state'>
          <div className='form-group'>
            <select
              id='exam-status'
              className='form-select'
              aria-label='Estado del examen'
              autocomplete='off'
              required
            >
              <option />
              <option value='1'>Activo</option>
              <option value='2'>Inactivo</option>
            </select>
            <label className='form-placeholder' htmlFor='exam-status'>Estado</label>
          </div>
        </div>
        <div className='form-section__buttons'>
          <Link to='/dashboard'>
            <button className='form-button secondary'>Cancelar </button>
          </Link>
          <button className='form-button primary'>Guardar</button>
        </div>
      </div>
    </form>
  )
}
