import React from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'
import { CircleButton } from '../../components/buttons/index'

export function Exams () {
  return (
    <section className='exam'>
      <div className='exam__container'>
        <input
          type='search'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
          className='exam__input'
        />
      </div>
      <ul className='exam__list'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
      <CircleButton />
    </section>
  )
}
