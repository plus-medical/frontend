import React from 'react'
import './styles.scss'
import { InputLogin } from '../inputs'
import { ButtonPrincipal } from '../buttons'
export function FormLogin () {
  return (
    <form className='login'>
      <InputLogin
        type='mail'
        aria-label='Numero de identicacion'
        placeholder='Numero de Identificacion'
      />
      <InputLogin
        type='password'
        placeholder='Contraseña'
        aria-label='Contraseña'
      />
      <ButtonPrincipal
        text='Iniciar sesión'
        aria-label='button iniciar session'
      />

    </form>
  )
}
