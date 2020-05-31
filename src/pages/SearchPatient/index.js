import React, { useEffect, useState } from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
import Loader from '../../components/Loading'
import Message from '../../components/messages'
import { Link } from 'react-router-dom'

const link = '/user'

export default function SearchPatient () {
  const { register, handleSubmit } = useForm()

  const [users, setUsers] = useState([])
  const { data, loading, get } = useCrud('users/?role=patient', true)

  const onSubmit = (res, e) => {
    e.preventDefault()
    if (res.search === '') {
      setUsers(data.data)
      return true
    }

    if (res.search) {
      get('&document=' + res.search)
        .then(res => {
          if (res.data.length > 0) {
            setUsers(res.data)
            return true
          } else {
            setUsers([])
            return true
          }
        })
    }
  }

  useEffect(() => {
    if (data.data) {
      setUsers(data.data)
    }
  }, [data])

  return (
    <section className='patients'>
      <form
        className='patients__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='sticky'>
          <input
            type='search'
            placeholder='Buscar Paciente'
            aria-label='busqueda de pacientes'
            className='patients__input'
            name='search'
            ref={register}
          />
        </div>
      </form>
      {
        loading ? <Loader /> : (
          !users.length ? <Message text='No se encontraron resultados' type='message-warning' /> : (
            <ul className='patients__list'>
              {users.map((user, index) => (
                <Item
                  key={index}
                  name={`${user.name.first} ${user.name.last}`}
                  dniType={user.documentType}
                  dni={user.document}
                  id={user._id}
                  link='clinichistory'
                />
              ))}
            </ul>
          ))
      }
      <Link to={link}>
        <CircleButton />
      </Link>
    </section>
  )
}
