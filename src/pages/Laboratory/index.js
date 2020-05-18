import React from 'react'
import { Link } from 'react-router-dom'

export function Laboratory () {
  return (

    <form>
      <div className='form-section'>
        <div className='form-section__title'>Crear laboratorio</div>
        <input className='form-input' type='text' placeholder='Laborotario' />
        <input className='form-input' type='text' placeholder='NIT' />
        <input className='form-input' type='text' placeholder='Dirección' />
        <input className='form-input' type='text' placeholder='Email' />
        <input className='form-input' type='text' placeholder='Teléfono' />
        <select className='form-select' name='status'>
          <option value='1'>Activo</option>
          <option value='2'>Inactivo</option>
        </select>
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
