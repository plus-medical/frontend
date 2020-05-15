import React from 'react'
import './styles.scss'

export function ButtonPrincipal ({ text }) {
  return (
    <button className='button_principal'>
      {text}
    </button>
  )
}

export function CircleButton () {
  return (
    <button className='CircleButton'>
      +
    </button>
  )
}

export function MenuButton () {
  return (
    <button className='MenuButton'>
      +
    </button>
  )
}
