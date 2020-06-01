import React, { useContext, useEffect } from 'react'
import './styles.scss'
import Logo from '../../assets/images/logotipoBlue.png'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../utils/Auth/AuthContext'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { MessageContext } from '../../utils/Messages/MessageContext'
import Message from '../../components/messages'

function Login () {
  const { authenticated, error, handleLogin } = useContext(AuthContext)
  const { register, handleSubmit, errors } = useForm()
  const { setMessage, message } = useContext(MessageContext)
  const history = useHistory()
  const onSubmit = (res) => {
    handleLogin(res)
  }

  useEffect(() => {
    setMessage({
      message: '',
      type: ''
    })
    const role = window.localStorage.getItem('role')
    if (authenticated) {
      switch (role) {
        case 'administrator': case 'patient' :
          history.push('/dashboard')
          break
        case 'doctor': case 'lab-worker':
          history.push('/search')
          break
      }
      setMessage({
        message: 'Login Success',
        type: 'success'
      })
    } else if (error !== '') {
      setMessage(
        {
          message: error,
          type: 'error'
        })
    }
  }, [authenticated, error])

  return (
    <section className='login'>
      <div className='login-container'>
        <div>
          <img src={Logo} alt='Plus Medical Logo' className='login-container__logo' />
        </div>
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
        <div>
          <Link className='login__link' to='dashboard'>
            Olvidó su contraseña
          </Link>
        </div>

        {message.type === 'error' && <Message text={message.message} type='message-alert' />}
      </div>
    </section>
  )
}

export default withRouter(Login)
