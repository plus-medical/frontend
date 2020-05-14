import React from 'react'
import './styles.scss'


export function ButtonPrincipal ({ text }) {
  return (
    <button className='button_principal'>
      {text}
    )
}

export function CircleButton () {
  return (
    <button className='CircleButton'>
      +
    </button>
  )
}
