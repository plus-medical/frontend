import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { FaRegCheckSquare } from 'react-icons/fa'

export function Item ({ data }) {
  return (
    <Link to={data}>
      <li className='Item'>
        <div className='Item__figure'>
          <img
            className='Item__Image'
            src='https://pbs.twimg.com/profile_images/1055299470148227072/xeEopDm__400x400.jpg'
            alt='photo'
          />
          <FaRegCheckSquare className='item__icon' />
        </div>

        <article className='Item__content'>
          <h5 className='Item__name'>name</h5>
          <label className='Item__dni'>1234322</label>
          <h6 className='Item__profile'>Profile</h6>
        </article>
        <section className='Item__indicator' />
      </li>
    </Link>
  )
}
