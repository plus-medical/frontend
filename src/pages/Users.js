import React from 'react'

export default function Users() {
  return (
    <section className='users'>
      <div className='users-input'>
        <input
          type='users-input__text'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
        />
      </div>
      <div className='item' aria-label='usuario'>
        <div className='item-name'>
          <h5>name</h5>
        </div>
        <div className='item-dni'>
          <label>1234322</label>
        </div>
        <div className='item-profile'>
          <h6>Profile</h6>
        </div>
      </div>
    </section>
  )
}
