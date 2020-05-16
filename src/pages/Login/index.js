import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from '../../assets/images/logo.png'

export function Login () {
  return (
    <section className='login'>
      <img src={Logo} alt='Plus Medical Logo' />
      <form className='login__form'>
        <input
          className='login__input'
          type='tel'
          placeholder='Numero de Identificacion'
          aria-label='Numero de identicacion'
          required
        />
        <input
          className='login__input'
          type='password'
          placeholder='Contraseña'
          aria-label='Contraseña'
          required
        />
        <button
          aria-label='button iniciar session'
          className='login__button'
        >
          Iniciar sesión
        </button>
      </form>
      <Link className='login__link' to='/'>
        Olvidó su contraseña
      </Link>
    </section>
  )
}
