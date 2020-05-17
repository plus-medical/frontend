import React from 'react'
import { Link } from 'react-router-dom'

export function Exam () {
  return (
    <form>
      <div className='form-section'>
        <div className='form-section__title'>Crear Examen</div>
        <input placeholder='Nombre del examen' className='form-input' />
        <div className='item-state'>
          <select className='form-select'>
            <option value='1'>Activo</option>
            <option value='2'>Inactivo</option>
          </select>
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
