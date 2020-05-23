import React from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../../components/photo'
import './styles.scss'

import { useForm } from 'react-hook-form'

export function User () {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(JSON.stringify(data))
    window.fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                autoComplete='off'
                name='name.first'
                ref={register({ required: true })}
              />
              {errors['name.first'] && <span className='form-input__error'>se requiere el nombre completo</span>}
              <label className='form-placeholder' htmlFor='firstname'>Nombre completo</label>
            </div>
            <div className='form-group'>
              <input
                id='lastname'
                className='form-input'
                type='text'
                aria-label='Apellido'
                autoComplete='off'
                name='name.last'
                ref={register({ required: true })}
              />
              {errors['name.last'] && <span className='form-input__error'>se requiere el apellido</span>}
              <label className='form-placeholder' htmlFor='lastname'>Apellidos</label>
            </div>
          </div>
        </div>

        <div className='user-info'>
          <div className='form-group'>
            <select
              name='documentType'
              id='typeDNI'
              className='form-select'
              ref={register({ required: true })}
            >
              <option />
              <option value='TI'>TI</option>
              <option value='CC'>CC</option>
              <option value='NIT'>NIT</option>
            </select>
            {errors.documentType && <span className='form-input__error'>se requiere el tipo de documento</span>}
            <label className='form-placeholder' htmlFor='typeDNI'>Tipo</label>
          </div>
          <div className='user-info__dni'>
            <div className='form-group'>
              <input
                id='dni'
                className='form-input'
                type='text'
                aria-label='Numero de documento'
                autoComplete='off'
                ref={register({ required: true })}
                name='document'
              />
              {errors.document && <span className='form-input__error'>se requiere el apellido</span>}
              <label className='form-placeholder' htmlFor='dni'>Número de documento</label>
            </div>
          </div>
        </div>
        <div className='form-group'>

          <select
            name='role'
            id='rol'
            className='form-select'
            ref={register({ required: true })}
          >
            <option />
            <option value='patient'>Paciente</option>
            <option value='manager'>Administrador</option>
            <option value='doctor'>Doctor</option>
            <option value='laboratory'>Laboratorio</option>
          </select>
          {errors.role && <span className='form-input__error'>se requiere el rol</span>}
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
            autoComplete='off'
            name='email'
            ref={register({ required: true })}
          />
          {errors.email && <span className='form-input__error'>se requiere el correo electronico</span>}
          <label className='form-placeholder' htmlFor='email-user'>Correo electrónico</label>
        </div>
        {/* <div className='form-group'>
          <input
            id='password'
            className='form-input'
            type='password'
            aria-label='contraseña generado'
            name='password'
            ref={register({ required: true })}
          />
          {errors.password && <span className='form-input__error'>se requiere el contraseña</span>}
          <label className='form-placeholder' htmlFor='password'>Contraseña</label>
        </div> */}
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
            autoComplete='off'
            name='birthdate'
            ref={register({ required: true })}
          />
          {errors.birthdate && <span className='form-input__error'>se requiere el fecha de nacimiento</span>}
          <label className='form-placeholder' htmlFor='birthdate'>Fecha de nacimiento</label>
        </div>
        <div className='user-gender'>
          <div>
            <input type='radio' id='male' name='gender' value='M' ref={register()} />
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input type='radio' id='female' name='gender' value='F' ref={register()} />
            <label htmlFor='female'>Female</label>
          </div>
          {/* <div>
            <input type='radio' id='other' name='gender' value='other' ref={register()} />
            <label htmlFor='other'>Other</label>
          </div> */}
        </div>
        <div className='form-group'>
          <input
            className='form-input'
            type='text'
            id='direccion'
            aria-label='Direccion'
            ref={register}
            name='address.street'
          />
          <label className='form-placeholder' htmlFor='Dirección'>Dirección</label>
        </div>
        <div className='form-group'>
          <input
            className='form-input'
            type='text'
            id='city'
            aria-label='Ciudad'
            ref={register}
            name='address.city'
          />
          <label className='form-placeholder' htmlFor='city'>Ciudad</label>
        </div>
        <div className='form-group'>
          <input
            className='form-input'
            type='tel'
            id='telefono'
            aria-label='telefono'
            ref={register({ pattern: /\(?([0-9]{3})\)?([ .-]?)?([0-9]{3})\2([0-9]{4})/ })}
            name='phone'
          />
          {errors.phone && <span className='form-input__error'>se requiere digitar números</span>}
          <label className='form-placeholder' htmlFor='telefono'>Teléfono</label>
        </div>
        {/* <div className='form-group'>
          <select
            className='form-select'
            name='active'
            ref={register({ required: true })}
          >
            <option />
            <option value='true'>activo</option>
            <option value='false'>Inactivo</option>
          </select>
          {errors.active && <span className='form-input__error'>se requiere seleccionar un estado</span>}
          <label className='form-placeholder' htmlFor='user-state'>Estado del usuario</label>
        </div> */}
        <div className='form-section__buttons'>
          <Link to='/dashboard'>
            <button className='form-button secondary'>Cancelar </button>
          </Link>
          <button type='submit' className='form-button primary'>Guardar</button>
        </div>
      </div>
    </form>
  )
}
