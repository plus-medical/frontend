import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function Laboratory () {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-section'>
        <div className='form-section__title'>Crear laboratorio</div>
        <div className='form-group'>
          <input
            id='laboratory-name'
            className='form-input'
            type='text'
            aria-label='Nombre del laborotario'
            autoComplete='off'
            name='laboratory_name'
            ref={register}
          />
          <label className='form-placeholder' htmlFor='laboratory-name'>Laboratorio</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-NIT'
            className='form-input'
            type='text'
            aria-label='NIT'
            autoComplete='off'
            name='laboratory_NIT'
            ref={register}
          />
          <label className='form-placeholder' htmlFor='laboratory-tin'>NIT</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-address'
            className='form-input'
            type='text'
            aria-label='Dirección'
            autoComplete='off'
            name='laboratory_address'
            ref={register}
          />
          <label className='form-placeholder' htmlFor='laboratory-address'>Dirección</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-email'
            className='form-input'
            type='text'
            aria-label='Correo electrónico'
            autoComplete='off'
            name='laboratory_email'
            ref={register}
          />
          <label className='form-placeholder' htmlFor='laboratory-email'>Correo electrónico</label>
        </div>
        <div className='form-group'>
          <input
            id='laboratory-phone'
            className='form-input'
            type='text'
            aria-label='Teléfono'
            autoComplete='off'
            name='laboratory_phone'
            ref={register}
          />
          <label className='form-placeholder' htmlFor='laboratory-phone'>Teléfono</label>
        </div>
        <div className='form-group'>
          <select
            id='laboratory-status'
            className='form-select'
            aria-label='Estado del laboratorio'
            autoComplete='off'
            name='laboratory_status'
            ref={register}
          >
            <option />
            <option value='active'>Activo</option>
            <option value='inactive'>Inactivo</option>
          </select>
          <label className='form-placeholder' htmlFor='laboratory-status'>Estado</label>
        </div>
        <div className='form-section__buttons'>
          <Link to='/dashboard'>
            <button className='form-button secondary'>Cancelar </button>
          </Link>
          <button submit='true' className='form-button primary'>Guardar</button>
        </div>
      </div>
    </form>

  )
}
