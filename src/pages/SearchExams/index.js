import React from 'react'
import './style.scss'
// import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { Link } from 'react-router-dom'

export function Exams () {
  const link = '/exam/1'

  return (
    <section className='users'>
      {/* <form
        className='users__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='sticky'>
          <input
            type='search'
            placeholder='Buscar usuario'
            aria-label='busqueda de usuarios'
            className='users__input'
            name='search'
            ref={register}
          />
        </div>
      </form>
      {
        loading ? <Loader /> : (
          <ul className='users__list'>
            {users.map((user, index) => (
              <Item
                key={index}
                name={`${user.name.first} ${user.name.last}`}
                dniType={user.documentType}
                dni={user.document}
                role={user.role}
              />
            ))}
          </ul>
        )
      } */}
      <Link to={link}>
        <CircleButton />
      </Link>
    </section>
  )
}
