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
            <label>historia medica</label>
          </div>
          <p>12344</p>
          <div className='patient-info__item'>
            <label>ocupación</label>
          </div>
          <input
            className='form-input'
            type='text'
            placeholder='Apellido'
            aria-label='Apellido'
          />
          <div className='patient-info__item'>
            <label>Genero</label>
          </div>
          <div>
            <input type='radio' value='Male' name='gender' /> hombre
            <input type='radio' value='Female' name='gender' /> Mujer
            <input type='radio' value='Other' name='gender' /> Otro
          </div>
          <div className='patient-info__item'>
            <label>Tipo de sangre</label>
          </div>
          <select name='bloodgroup' className='form-input'>
            <option value='1'>A</option>
            <option value='2'>B</option>
            <option value='3'>AB</option>
            <option value='3'>O</option>
          </select>
          <div className='patient-info__item'>
            <label>RH</label>
          </div>
          <select name='Rh' className='form-input'>
            <option value='1'>Positivo</option>
            <option value='2'>Negativo</option>
          </select>
          <div className='patient-info__item'>
            <label>Nombre del response</label>
          </div>
          <input
            className='form-input'
            type='text'
            placeholder='nombre de responsable'
            aria-label='nombre de responsable'
          />
          <div className='patient-info__item'>
            <label>apellido del responsable</label>
          </div>
          <input
            className='form-input'
            type='text'
            placeholder='Apellido del responsable'
            aria-label='Apellido del responsable'
          />
          <div className='patient-info__item'>
            <label>Telefono del responsable</label>
          </div>
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
