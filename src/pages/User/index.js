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
            <input
              className='form-input'
              type='text'
              placeholder='Nombre'
              aria-label='Nombre'
            />
            <input
              className='form-input'
              type='text'
              placeholder='Apellido'
              aria-label='Apellido'
            />
          </div>
        </div>

        <div className='user-info'>
          <div>
            <select name='typeDNI' className='form-input'>
              <option value='1'>TI</option>
              <option value='2'>CC</option>
              <option value='3'>NIT</option>
            </select>
          </div>
          <div className='user-info__data'>
            <input
              className='form-input'
              type='text'
              placeholder='Numero de Documento'
              aria-label='Numero de documento'
            />
          </div>
        </div>
        <select
          name='Rol'
          className='form-input'
        >
          <option value='1'>Paciente</option>
          <option value='2'>Administrador</option>
          <option value='3'>Doctor</option>
          <option value='4'>Laboratorio</option>
        </select>
      </div>
      <div className='form-section'>
        <div className='form-section__title'>Datos de autenticación</div>
        <input
          className='form-input'
          type='mail'
          placeholder='Correo electronico'
          aria-label='ingresar Correo electronico'
        />
        <input
          className='form-input'
          type='password'
          placeholder='Contraseña generada'
          aria-label='contraseña generado'
        />
        <div className='form-section__buttons'>
          <button className='form-button primary'>
            Generar contraseña
          </button>
        </div>
      </div>
      <div className='form-section'>
        <div className='form-section__title'>Datos Personales</div>
        <input className='form-input' type='date' placeholder='Fecha de nacimiento' />

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
        <input
          className='form-input'
          type='text'
          placeholder='Direccion'
          aria-label='Direccion'
        />
        <input
          className='form-input'
          type='tel'
          placeholder='Telefono'
          aria-label='telefono'
        />
        <select className='form-select' name='status'>
          <option value='1'>activo</option>
          <option value='2'>Inactivo</option>
        </select>
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
