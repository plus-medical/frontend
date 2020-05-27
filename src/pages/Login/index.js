import React, { useContext, useEffect } from 'react'
import './styles.scss'
import Logo from '../../assets/images/logotipoBlue.png'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../utils/Auth/AuthContext'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { MessageContext } from '../../utils/Messages/MessageContext'

function Login () {
  const { authenticated, error, handleLogin } = useContext(AuthContext)
  const { register, handleSubmit, errors } = useForm()
  const { setMessage } = useContext(MessageContext)
  const history = useHistory()

  const onSubmit = (data) => {
    handleLogin(data)
    history.push('/dashboard')
  }

  useEffect(() => {
    setMessage('')
    if (authenticated) {
      history.push('/dashboard')
      setMessage('Login Success')
    } else if (error !== '') {
      setMessage('Login Denied', error)
      console.log('error')
    }
  }, [authenticated, error])

  return (
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
            ref={register({ required: false })}
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
            ref={register({ required: false })}
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

export default withRouter(Login)
