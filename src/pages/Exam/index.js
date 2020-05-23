import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function Exam () {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-section'>
        <div className='form-section__title'>Crear Examen</div>
        <div className='form-group'>
          <input
            type='text'
            id='exam-name'
            className='form-input'
            aria-label='Nombre del examen'
            autoComplete='off'
            name='exam_name'
            ref={register({ required: true })}
          />
          {errors.status && <span className='form-input__error'>se requiere el nombre del examen</span>}
          <label className='form-placeholder' htmlFor='exam-name'>Examen</label>
        </div>
        <div className='item-state'>
          <div className='form-group'>
            <select
              id='exam-status'
              className='form-select'
              aria-label='Estado del examen'
              autoComplete='off'
              name='exam_state'
              ref={register({ required: true })}
            >
              {errors.status && <span className='form-input__error'>se requiere seleccionar un estado</span>}
              <option />
              <option value='active'>Activo</option>
              <option value='inactive'>Inactivo</option>
            </select>
            <label className='form-placeholder' htmlFor='exam-status'>Estado</label>
          </div>
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
