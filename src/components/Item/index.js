import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { FaRegCheckSquare } from 'react-icons/fa'

export function Item ({ data }) {
  return (
    <Link to={data}>
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
          <p className='item__name'>name</p>
          <p className='item__dni'>1234322</p>
          <p className='item__profile'>Profile</p>
        </article>
        <section className='item__indicator' />

      </li>
    </Link>
  )
}
