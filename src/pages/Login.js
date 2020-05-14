import React from 'react'
import { FormLogin } from '../components/molecules/form-login'
import { LinkText } from '../components/molecules/link-text'
import Logo from '../assets/images/logo.png'

export function Login () {
  return (
    <div className='container-login'>
      <img src={Logo} alt='Plus Medical Logo' />
      <FormLogin />
      <LinkText to='/' text='Olvidó su contraseña' />
    </div>
  )
}
