import React, { useEffect, useState } from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
import Loader from '../../components/Loading'


export function Users (props) {
  const { register, handleSubmit } = useForm()

  const [users, setUsers] = useState([])
  const { data, loading, get } = useCrud('/users', true)

  const onSubmit = (res, e) => {
    e.preventDefault()
    if (res.search) {
      get(res.search)
        .then(res => {
          if (res.data.length > 0) {
            setUsers(res.data)
          } else {
            // Warning Message
          }
        })
    } else {
      setUsers(data.data)
    }
  }

  useEffect(() => {
    if (data.data) {
      setUsers(data.data)
    }
  }, [data])

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
      }
      <CircleButton data='/user' />
    </section>
  )
}
