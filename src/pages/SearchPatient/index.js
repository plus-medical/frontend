import React, { useEffect, useState } from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
import Loader from '../../components/Loading'
import Message from '../../components/messages'

export default function SearchPatient () {
  const { register, handleSubmit } = useForm()
  const [users, setUsers] = useState([])
  const [link, setLink] = useState('')
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
    const role = window.localStorage.getItem('role')

    if (data.data) {
      setUsers(data.data)
      switch (role) {
        case 'lab-worker':
          setLink('laboratoryexam')
          break
        case 'doctor':
          setLink('clinichistory')
          break
      }
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
                  link={link}
                />
              ))}
            </ul>
          ))
      }

    </section>
  )
}
