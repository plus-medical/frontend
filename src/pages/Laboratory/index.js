import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './styles.scss'
import SelectExams from '../../components/selectExams'

export default function Laboratory () {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='laboratory'>
        <div className='laboratory__title'>Información del laboratorio</div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-name'>Laboratorio</label>
          <input
            id='laboratory-name'
            className='form-input'
            type='text'
            aria-label='Nombre del laboratorio'
            autoComplete='off'
            name='laboratory_name'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-tin'>NIT</label>
          <input
            id='laboratory-tin'
            className='form-input'
            type='text'
            aria-label='NIT'
            autoComplete='off'
            name='laboratory_tin'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-address'>Dirección</label>
          <input
            id='laboratory-address'
            className='form-input'
            type='text'
            aria-label='Dirección'
            autoComplete='off'
            name='laboratory_address'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-email'>Correo electrónico</label>
          <input
            id='laboratory-email'
            className='form-input'
            type='text'
            aria-label='Correo electrónico'
            autoComplete='off'
            name='laboratory_email'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-phone'>Teléfono</label>
          <input
            id='laboratory-phone'
            className='form-input'
            type='text'
            aria-label='Teléfono'
            autoComplete='off'
            name='laboratory_phone'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Exámenes</label>
          <SelectExams />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='laboratory-status'>Estado</label>
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
        </div>
        <div className='form-section__buttons'>
          <Link to='/laboratories'>
            <button className='form-button__secondary'>Cancelar </button>
          </Link>
          <button submit='true' className='form-button__primary'>Guardar</button>
        </div>
      </div>
    </form>

  )
}
