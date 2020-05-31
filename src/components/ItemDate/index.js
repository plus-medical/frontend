import React from 'react'
import './styles.scss'

import CALENDAR from '../../assets/images/calendar.png'

function Item ({ id, name, dniType, dni, role, link }) {
  return (
    <>
      <li className='item'>
        <div className='item__figure'>
          <img
            className='item__image'
            src={CALENDAR}
            alt='photo'
          />
        </div>
        <article className='item__content'>
          <p className='item__name'>Odontologia</p>
          <p className='item__dni'>07/05/2020</p>
          <p className='item__profile'>Dr. Wilson</p>
        </article>
        <section className='item__indicator' />
      </li>
    </>
  )
}

export default Item
