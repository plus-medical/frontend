import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../utils/context/authContext'

import './styles.scss'
import Logo from '../../assets/images/logotipoBlue.png'

export function Login () {
  const { register, handleSubmit, errors } = useForm()
  const { setUser } = useContext(AuthContext)
  const [page, setPage] = useState('')

  function goTo (role) {
    console.log(role)
    switch (role) {
      case 'patient':
      case 'administrator' :
        setPage('/dashboard')
        break
      case 'doctor':
      case 'lab-worker':
        setPage('/search')
        break
    }
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    window
      .fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
      .then((res) => res.json())
      .then((response) => {
        const { user } = response.data
        setUser(user)
        goTo(user.role)
      })
      .catch((err) => console.log(err.message))
  }

  return page && page !== '' ? (
    <Redirect to={page} />
  ) : (
    <section className='login'>
      <img src={Logo} alt='Plus Medical Logo' />
      <div className='login-container'>
        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='login__input login__input-user'
            name='username'
            type='tel'
            placeholder='Numero de Identificacion'
            aria-label='Numero de identicacion'
            ref={register({ required: true })}
          />
          {errors.username && (
            <span className='login__error'>Campo requerido</span>
          )}
          <input
            className='login__input login__input-psw'
            name='password'
            type='password'
            placeholder='Contraseña'
            aria-label='Contraseña'
            ref={register({ required: true })}
          />
          {errors.password && (
            <span className='login__error'>Campo requerido</span>
          )}

          <button
            aria-label='button iniciar session'
            className='login__button'
            type='submit'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
      <Link className='login__link' to='/'>
        Olvidó su contraseña
      </Link>
    </section>
  )
}
