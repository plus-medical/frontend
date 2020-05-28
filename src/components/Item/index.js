import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { FaRegCheckSquare } from 'react-icons/fa'

export function Item ({ name, dniType, dni, role }) {
  return (
    <Link to={`user/${dni}`}>
      <li className='item'>
        <div className='item__figure'>
          <img
            className='item__image'
            src='https://pbs.twimg.com/profile_images/1055299470148227072/xeEopDm__400x400.jpg'
            alt='photo'
          />
          <FaRegCheckSquare className='item__icon' />
        </div>
        <article className='item__content'>
          <p className='item__name'>{name}</p>
          <p className='item__dni'>{`${dniType} ${dni}`}</p>
          <p className='item__profile'>{role}</p>
        </article>
        <section className='item__indicator' />

      </li>
    </Link>
  )
}
