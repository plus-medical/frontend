import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from '../../assets/images/logotipoBlue.png'

export function Login () {
  const formLogin = useRef()

  function send (formData) {
    const data = Array.from(formData)
    window.alert(`se ha enviado la siguiente información: ${JSON.stringify(data)}`)
  }

  function handleSubmit (event) {
    event.preventDefault()
    // eslint-disable-next-line no-undef
    const formData = new FormData(formLogin.current)
    send(formData)
  }

  return (
    <section className='login'>
      <img src={Logo} alt='Plus Medical Logo' />
      <form
        className='login__form'
        ref={formLogin}
        onSubmit={handleSubmit}
      >
        <input
          className='login__input'
          name='DNI'
          type='tel'
          placeholder='Numero de Identificacion'
          aria-label='Numero de identicacion'
          required
        />
        <input
          className='login__input'
          name='Psw'
          type='password'
          placeholder='Contraseña'
          aria-label='Contraseña'
          required
        />
        <button
          aria-label='button iniciar session'
          className='login__button'
          type='submit'
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
