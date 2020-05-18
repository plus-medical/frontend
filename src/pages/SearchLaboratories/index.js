import React from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'
import { CircleButton } from '../../components/buttons/index'

export const Laboratories = () => {
  const link = '/laboratory'
  return (
    <section className='laboratories'>
      <div className='laboratories__container'>
        <input
          type='search'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
          className='laboratories__input'
        />
      </div>
      <ul className='laboratories__list'>
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
      </ul>
      <CircleButton />
    </section>
  )
}
