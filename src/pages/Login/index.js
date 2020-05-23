import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './styles.scss'
import Logo from '../../assets/images/logotipoBlue.png'

export function Login () {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <section className='login'>
      <img src={Logo} alt='Plus Medical Logo' />
      <form
        className='login__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='login__input login__input-user'
          name='username'
          type='tel'
          placeholder='Numero de Identificacion'
          aria-label='Numero de identicacion'
          ref={register({ required: true })}
        />
        {errors.username && <span className='login__error'>Campo requerido</span>}
        <input
          className='login__input login__input-psw'
          name='password'
          type='password'
          placeholder='Contraseña'
          aria-label='Contraseña'
          ref={register({ required: true })}
        />
        {errors.password && <span className='login__error'>Campo requerido</span>}

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
