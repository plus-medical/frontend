import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './styles.scss'

export default function Exam (props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='exam'>
        <div className='exam__title'>Información del Examen</div>
        <div className='form-group'>
          <div className='form-label'>Examen</div>
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
        </div>
        <div className='form-group'>
          <div className='form-label'>Estado</div>
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
        </div>
        <div className='form-section__buttons'>
          <Link to='/exams'>
            <button className='form-button__secondary'>Cancelar </button>
          </Link>
          <button submit='true' className='form-button__primary'>Guardar</button>
        </div>
      </div>
    </form>
  )
}
