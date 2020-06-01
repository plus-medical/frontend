import React from 'react'
import './styles.scss'

function Item ({ img }) {
  return (
    <>
      <li className='item'>
        <div className='item__figure item__figure-icon'>
          <img
            className='item__image item__img-icon'
            src={img}
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
