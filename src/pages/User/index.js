import React from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../../components/photo'
import './styles.scss'

export function User () {
  return (
    <form>
      <div className='form-section'>
        <div className='user-info'>
          <div className='user-info__photo'>
            <Photo />
          </div>
          <div className='user-info__data'>
            <div className='form-group'>
              <input
                id='firstname'
                className='form-input'
                type='text'
                aria-label='Nombre completo'
                autocomplete='off'
                required
              />
              <label className='form-placeholder' htmlFor='firstname'>Nombre completo</label>
            </div>
            <div className='form-group'>
              <input
                id='lastname'
                className='form-input'
                type='text'
                aria-label='Apellido'
                autocomplete='off'
                required
              />
              <label className='form-placeholder' htmlFor='lastname'>Apellidos</label>
            </div>
          </div>

        </div>

        <div className='user-info'>
          <div className='form-group'>
            <select
              name='typeDNI' id='typeDNI'
              className='form-select' required
            >
              <option />
              <option value='1'>TI</option>
              <option value='2'>CC</option>
              <option value='3'>NIT</option>
            </select>
            <label className='form-placeholder' htmlFor='typeDNI'>Tipo</label>
          </div>
          <div className='user-info__dni'>
            <div className='form-group'>
              <input
                id='dni'
                className='form-input'
                type='text'
                aria-label='Numero de documento'
                autocomplete='off'
                required
              />
              <label className='form-placeholder' htmlFor='dni'>Número de documento</label>
            </div>
          </div>
        </div>
        <div className='form-group'>

          <select
            name='rol'
            id='rol'
            className='form-select'
            required
          >
            <option />
            <option value='1'>Paciente</option>
            <option value='2'>Administrador</option>
            <option value='3'>Doctor</option>
            <option value='4'>Laboratorio</option>
          </select>
          <label className='form-placeholder' htmlFor='rol'>Rol</label>
        </div>
      </div>
      <div className='form-section'>
        <div className='form-section__title'>Datos de autenticación</div>
        <div className='form-group'>
          <input
            id='email-user'
            className='form-input'
            type='mail'
            aria-label='ingresar Correo electronico'
            autocomplete='off'
            required
          />
          <label className='form-placeholder' htmlFor='email-user'>Correo electrónico</label>
        </div>
        <div className='form-group'>
          <input
            id='password'
            className='form-input'
            type='password'
            aria-label='contraseña generado'
            required
          />
          <label className='form-placeholder' htmlFor='password'>Contraseña</label>
        </div>
        <div className='form-section__buttons'>
          <button className='form-button primary'>
            Generar contraseña
          </button>
        </div>
      </div>
      <div className='form-section'>
        <div className='form-section__title'>Datos Personales</div>
        <div className='form-group'>
          <input
            id='birthdate'
            className='form-input'
            type='date'
            autocomplete='off'
          />
          <label className='form-placeholder' htmlFor='birthdate'>Fecha de nacimiento</label>
        </div>
        <div className='user-gender'>
          <div>
            <input type='radio' id='male' name='gender' value='male' required />
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input type='radio' id='female' name='gender' value='female' required />
            <label htmlFor='female'>Female</label>
          </div>
          <div>
            <input type='radio' id='other' name='gender' value='other' required />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='form-group'>
          <input
            className='form-input'
            type='text'
            id='direccion'
            aria-label='Direccion'
            required
          />
          <label className='form-placeholder' htmlFor='direccion'>Dirección</label>
        </div>
        <div className='form-group'>
          <input
            className='form-input'
            type='tel'
            id='telefono'
            aria-label='telefono'
            required
          />
          <label className='form-placeholder' htmlFor='telefono'>Teléfono</label>
        </div>
        <div className='form-group'>
          <select className='form-select' name='status' required>
            <option />
            <option value='1'>activo</option>
            <option value='2'>Inactivo</option>
          </select>
          <label className='form-placeholder' htmlFor='user-state'>Estado del usuario</label>
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
