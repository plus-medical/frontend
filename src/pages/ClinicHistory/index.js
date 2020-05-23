import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { CircleButton } from '../../components/buttons/index'
import { useForm } from 'react-hook-form'

export function ClinicHistory () {
  const { handleSubmit, register } = useForm()
  const onSubmit = values => console.log(values)

  const link = '/medicalconsultation'
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-section'>
          <div className='patient-info'>
            <div className='patient-info__item'>
              <label>Historia Medica</label>
              <p>12344</p>
            </div>
            <input
              className='form-input'
              type='text'
              placeholder='Ocupación'
              aria-label='Ocupación'
              name='patient_occupation'
              ref={register}
            />
            <div className='user-gender'>
              <div>
                <input type='radio' id='male' name='patient_gender' value='male' ref={register} />
                <label htmlFor='male'>Male</label>
              </div>
              <div>
                <input type='radio' id='female' name='patient_gender' value='female' ref={register} />
                <label htmlFor='female'>Female</label>
              </div>
              <div>
                <input type='radio' id='other' name='patient_gender' value='other' ref={register} />
                <label htmlFor='other'>Other</label>
              </div>
            </div>
            <div className='patient__blood'>
              <div>
                <div className='patient-info__item'>
                  <label>Tipo de sangre</label>
                </div>
                <select
                  name='patient_bloodgroup'
                  className='form-input'
                  ref={register}
                >
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='AB'>AB</option>
                  <option value='O'>O</option>
                </select>
              </div>
              <div>
                <div className='patient-info__item'>
                  <label>RH</label>
                </div>
                <select
                  name='patient_RH'
                  className='form-input'
                  ref={register}
                >
                  <option value='positive'>Positivo</option>
                  <option value='negative'>Negativo</option>
                </select>
              </div>
            </div>
            <div className='form-section__title'>Datos de autenticación</div>
            <input
              className='form-input'
              type='text'
              placeholder='nombre de responsable'
              aria-label='nombre de responsable'
              name='patient_nameresponsable'
              ref={register}
            />
            <input
              className='form-input'
              type='text'
              placeholder='Apellido del responsable'
              aria-label='Apellido del responsable'
              name='patient_lastnameresponsable'
              ref={register}
            />
            <input
              className='form-input'
              type='tel'
              placeholder='telefono del resposable'
              aria-label='telefono del resposable'
              name='patient_phoneresponsable'
              ref={register}
            />
          </div>
        </div>
        <Link to='/dashboard'>
          <button className='form-button secondary'>Cancelar </button>
        </Link>
        <button submit='true' className='form-button primary'>Guardar</button>
      </form>
      <CircleButton data={link} />
    </>
  )
}
