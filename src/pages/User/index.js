import React, { useContext } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Photo from '../../components/photo/index'

import { AuthContext } from '../../utils/Auth/AuthContext'
import { MessageContext } from '../../utils/Messages/MessageContext'

export default function User () {
  const { register, handleSubmit, errors } = useForm()
  const { handleSignUp } = useContext(AuthContext)
  const { setMessage } = useContext(MessageContext)

  const onSubmit = async (data) => {
    const result = await handleSignUp(data)
    setMessage(result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='user-info'>
        <div className='user-info__title'>Información del usuario</div>
        <div className='user-info__grid'>
          <div className='user-info__photo'>
            <Photo />
          </div>
          <div className='user-info__data'>
            <div className='form-group'>
              <label className='form-label' htmlFor='firstname'>Nombre completo</label>
              <input
                id='firstname'
                className='form-input'
                type='text'
                aria-label='Nombre completo'
                autoComplete='true'
                name='name.first'
                ref={register({ required: true })}
              />
              {errors['name.first'] && <span className='form-input__error'>se requiere el nombre completo</span>}
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>Apellidos</label>
              <input
                id='lastname'
                className='form-input'
                type='text'
                aria-label='Apellido'
                autoComplete='true'
                name='name.last'
                ref={register({ required: true })}
              />
              {errors['name.last'] && <span className='form-input__error'>se requiere el apellido</span>}
            </div>
          </div>
        </div>

        <div className='user-info__grid'>
          <div className='form-group'>
            <label className='form-label' htmlFor='typeDNI'>Tipo</label>
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
          </div>
          <div className='user-info__dni'>
            <div className='form-group'>
              <label className='form-label' htmlFor='dni'>Número de documento</label>
              <input
                id='dni'
                className='form-input'
                type='text'
                aria-label='Numero de documento'
                autoComplete='true'
                ref={register({ required: true })}
                name='document'
              />
              {errors.document && <span className='form-input__error'>se requiere el apellido</span>}
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='birthdate'>Fecha de nacimiento</label>
          <input
            id='birthdate'
            className='form-input'
            type='date'
            autoComplete='true'
            name='birthdate'
            ref={register({ required: true })}
          />
          {errors.birthdate && <span className='form-input__error'>se requiere el fecha de nacimiento</span>}
        </div>
        <div className='user-info__gender'>
          <div>
            <input type='radio' id='male' name='gender' value='M' ref={register()} />
            <label htmlFor='male' className='form-label'>Male</label>
          </div>
          <div>
            <input type='radio' id='female' name='gender' value='F' ref={register()} />
            <label htmlFor='female' className='form-label'>Female</label>
          </div>
          {/* <div>
            <input type='radio' id='other' name='gender' value='other' ref={register()} />
            <label htmlFor='other'>Other</label>
          </div> */}
        </div>
      </div>

      <div className='user-auth'>
        <div className='form-group'>
          <div className='user-auth__title'>Datos de autenticación</div>
          <label className='form-label' htmlFor='role'>Rol</label>
          <select
            name='role'
            id='role'
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
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='email-user'>Correo electrónico</label>
          <input
            id='email-user'
            className='form-input'
            type='mail'
            aria-label='ingresar Correo electronico'
            autoComplete='true'
            name='email'
            ref={register({ required: true })}
          />
          {errors.email && <span className='form-input__error'>se requiere el correo electronico</span>}
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
        <div className='user-auth__buttons'>
          <button className='user-auth__btn-primary'>
            Generar contraseña
          </button>
        </div>
      </div>
      <div className='user-auth'>
        <div className='user-auth__title'>Datos Personales</div>
        <div className='form-group'>
          <label className='form-label' htmlFor='Dirección'>Dirección</label>
          <input
            className='form-input'
            type='text'
            id='direccion'
            aria-label='Direccion'
            ref={register}
            name='address.street'
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='city'>Ciudad</label>
          <input
            className='form-input'
            type='text'
            id='city'
            aria-label='Ciudad'
            ref={register}
            name='address.city'
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='telefono'>Teléfono</label>
          <input
            className='form-input'
            type='tel'
            id='telefono'
            aria-label='telefono'
            ref={register({ pattern: /\(?([0-9]{3})\)?([ .-]?)?([0-9]{3})\2([0-9]{4})/ })}
            name='phone'
          />
          {errors.phone && <span className='form-input__error'>se requiere digitar números</span>}
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
      </div>

      <div className='user-form__buttons'>
        <Link to='/dashboard'>
          <button className='user-form__btn-secondary'>Cancelar </button>
        </Link>
        <button type='submit' className='user-form__btn-primary'>Guardar</button>
      </div>
    </form>
  )
}
