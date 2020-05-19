import React from 'react'
import './style.scss'

import { CircleButton } from '../../components/buttons/index'

export function ClinicHistory () {
  const link = '/medicalconsultation'
  return (
    <form>
      <div className='form-section'>
        <div className='patient-info'>
          <div className='patient-info__item'>
            <label>Historia Medica</label>
            <p>12344</p>
          </div>
          <input
            className='form-input'
            type='text'
            placeholder='ocupacion'
            aria-label='ocupacion'
          />
          <div className='user-gender'>
            <div>
              <input type='radio' id='male' name='gender' value='male' />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input type='radio' id='female' name='gender' value='female' />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input type='radio' id='other' name='gender' value='other' />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
          <div className='patient__blood'>
            <div>
              <div className='patient-info__item'>
                <label>Tipo de sangre</label>
              </div>
              <select name='bloodgroup' className='form-input'>
                <option value='1'>A</option>
                <option value='2'>B</option>
                <option value='3'>AB</option>
                <option value='3'>O</option>
              </select>
            </div>
            <div>
              <div className='patient-info__item'>
                <label>RH</label>
              </div>
              <select name='Rh' className='form-input'>
                <option value='1'>Positivo</option>
                <option value='2'>Negativo</option>
              </select>
            </div>
          </div>
          <div className='form-section__title'>Datos de autenticación</div>
          <input
            className='form-input'
            type='text'
            placeholder='nombre de responsable'
            aria-label='nombre de responsable'
          />
          <input
            className='form-input'
            type='text'
            placeholder='Apellido del responsable'
            aria-label='Apellido del responsable'
          />
          <input
            className='form-input'
            type='tel'
            placeholder='telefono del resposable'
            aria-label='telefono del resposable'
          />
        </div>
        <CircleButton data={link} />
      </div>
    </form>
  )
}
