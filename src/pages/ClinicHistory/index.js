import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import Photo from '../../components/photo/index'

export default function ClinicHistory () {
  const { handleSubmit, register } = useForm()
  const onSubmit = values => console.log(values)
  const link = '/medicalconsultation'

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='patient'>
          <div className='patient__title'>Información del Paciente</div>
          <div className='patient__grid-id'>
            <div className='patient__photo'>
              <Photo />
            </div>
            <div className='patient__data'>
              <div className='form-group'>
                <label className='form-label' htmlFor='firstname'>Nombre completo</label>
                <p className='form-text'>Iván Dario Sanchez Jimenez</p>
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='lastname'>Identificación</label>
                <p className='form-text'>CC 12345678</p>
              </div>
            </div>
          </div>
          <div className='patient__grid-data'>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>Edad</label>
              <p className='form-text'>36 Años</p>
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>Genero</label>
              <p className='form-text'>Masculino</p>
            </div>
          </div>
          <div className='patient__grid-data'>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>Tipo de Sangre</label>
              <select
                name='patient_bloodgroup'
                className='form-input'
                ref={register}
              >
                <option />
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='AB'>AB</option>
                <option value='O'>O</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>RH</label>
              <select
                name='patient_RH'
                className='form-input'
                ref={register}
              >
                <option />
                <option value='positive'>Positivo</option>
                <option value='negative'>Negativo</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='lastname'>Ocupación</label>
            <input
              className='form-input'
              type='text'
              aria-label='Ocupación'
              name='patient_occupation'
              ref={register}
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='lastname'>Población Vulnerable</label>
            <select
              name='poblation'
              className='form-select'
              ref={register}
            >
              <option />
              <option value='positive'>No Aplica</option>
              <option value='negative'>Adulto mayor</option>
              <option value='negative'>En situación de discapacidad</option>
              <option value='negative'>Grupo étnico</option>
              <option value='negative'>Victima del conflicto armado</option>
            </select>
          </div>
        </div>
        <div className='responsable'>
          <div className='responsable__title'>Información del Responsable</div>
          <div className='form-group'>
            <label className='form-label' htmlFor='responsable_name'>Nombre</label>
            <input
              id='responsable_name'
              className='form-input'
              type='text'
              aria-label='Nombre del responsable'
              autoComplete='true'
              name='responsable_name'
              ref={register({ required: true })}
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='responsable_lastname'>Apellido</label>
            <input
              id='responsable_lastname'
              className='form-input'
              type='text'
              aria-label='apellido del responsable'
              autoComplete='true'
              name='responsable_lastname'
              ref={register({ required: true })}
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='responsable_phone'>Teléfono</label>
            <input
              id='responsable_phone'
              className='form-input'
              type='text'
              aria-label='telefono del responsable'
              autoComplete='true'
              name='responsable_phone'
              ref={register({ required: true })}
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='relationship'>Relación</label>
            <select
              name='relationship'
              className='form-select'
              ref={register}
            >
              <option />
              <option value='amig@'>Amig@</option>
              <option value='conyuge'>Cónyuge</option>
              <option value='hij@'>Hij@</option>
              <option value='padres'>Padre / Madre</option>
              <option value='otrosf'>Otros Familiares</option>
            </select>
          </div>
        </div>
        <div className='medical-history'>
          <div className='medical-history__title'>Historia Clínica</div>
          <div className='form-label'>Antecedentes Médicos</div>
          <textarea className='medical-history__info' />
        </div>

        <div className='medical-history__buttons'>
          <Link to='/dashboard'>
            <button className='medical-history__btn-secondary'>Cancelar </button>
          </Link>
          <button type='submit' className='medical-history__btn-primary'>Guardar</button>
        </div>

      </form>
      <link to={link}>
        <CircleButton />
      </link>
    </>
  )
}
