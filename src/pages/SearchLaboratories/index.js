import React from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { Link } from 'react-router-dom'

export default function Laboratories () {
  const link = '/laboratory/1'
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
      <Link to={link}>
        <CircleButton />
      </Link>
    </section>
  )
}
