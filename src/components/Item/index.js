import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import DEFAULT_PHOTO from '../../assets/images/default.png'

import { FaRegCheckSquare } from 'react-icons/fa'

function Item ({ id, name, dniType, dni, role, link }) {
  return (
    <Link to={`${link}/${id}`}>
      <li className='item'>
        <div className='item__figure'>
          <img
            className='item__image'
            src={DEFAULT_PHOTO}
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

export default Item
