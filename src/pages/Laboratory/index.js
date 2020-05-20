import React from 'react'
import { Link } from 'react-router-dom'

export function Laboratory () {
  return (
    <form>
      <div className='form-section'>
        <div className='form-section__title'>Crear laboratorio</div>
        <div className='form-group'>
          <input
            id='laboratory-name'
            className='form-input'
            type='text'
            aria-label='Nombre del laborotario'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='laboratory-name'>Laboratorio</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-tin'
            className='form-input'
            type='text'
            aria-label='nit'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='laboratory-tin'>NIT</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-address'
            className='form-input'
            type='text'
            aria-label='Dirección'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='laboratory-address'>Dirección</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-email'
            className='form-input'
            type='text'
            aria-label='Correo electrónico'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='laboratory-email'>Correo electrónico</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-phone'
            className='form-input'
            type='text'
            aria-label='Teléfono'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='laboratory-phone'>Teléfono</label>
        </div>
        <div className='form-group'>
          <select
            id='laboratory-status'
            className='form-select'
            aria-label='Estado del laboratorio'
            autocomplete='off'
            required
          >
            <option />
            <option value='1'>Activo</option>
            <option value='2'>Inactivo</option>
          </select>
          <label className='form-placeholder' htmlFor='laboratory-status'>Estado</label>
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
