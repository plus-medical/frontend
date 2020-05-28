import React from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { Link } from 'react-router-dom'

export function Exams () {
  const link = '/exam/1'

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
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
      </ul>
      <Link to={link}>
        <CircleButton />
      </Link>
    </section>
  )
}
