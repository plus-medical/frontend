import React, { useEffect } from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'
import { CircleButton } from '../../components/buttons/index'
import { useForm } from 'react-hook-form'

export function Users () {
  useEffect(() => {
    window.fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(),
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
      }).catch((err) => console.log(err.message))
  }
  )

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  const link = '/user'
  return (
    <section className='users'>
      <form
        className='users__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='search'
          placeholder='buscar usuario'
          aria-label='busqueda de usuarios'
          className='users__input'
          name='search'
          ref={register}
        />
      </form>
      <ul className='users__list'>
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
        <Item data={link} />
      </ul>
      <CircleButton data={link} />
    </section>
  )
}
