import React from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'

export const SearchPatient = () => {
  const link = '/clinichistory'
  return (
    <section className='patient'>
      <div className='patient__container'>
        <input
          type='search'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
          className='patient__input'
        />
      </div>
      <ul className='patient__list'>
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
      </ul>
    </section>
  )
}