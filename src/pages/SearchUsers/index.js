import React from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'
import { CircleButton } from '../../components/buttons/index'

export function Users () {
  return (
    <section className='users'>
      <div className='users__container'>
        <input
          type='search'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
          className='users__input'
        />
      </div>
      <ul className='users__list'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
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
