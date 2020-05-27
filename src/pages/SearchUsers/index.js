import React from 'react'
import './style.scss'
import { Item } from '../../components/Item/index'
import { CircleButton } from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
import { Link, useHistory, withRouter } from 'react-router-dom'

export function Users () {
  const { register, handleSubmit } = useForm()
  const { data, remove } = useCrud('/users')
  const history = useHistory()
  console.log(data)

  const onSubmit = data => console.log(data)
  const link = '/user/1'

  // function handleRegister () {
  //   history.push('/register')
  // }

  // function handleDetail (id) {
  //   history.push(`/user/${id}`)
  // }

  // function handleDelete (id) {
  //   const resp = window.confirm('¿Está seguro?')
  //   if (resp) {
  //     remove(id)
  //   }
  // }

  return (
    <section className='users'>
      <form
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
