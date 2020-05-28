import React from 'react'
import './style.scss'
import Item from '../../components/Item/index'
import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
// import { useCrud } from '../../utils/Crud/useCrud'
import { Link } from 'react-router-dom'

export function Users () {
  const { register, handleSubmit } = useForm()
  // const { data } = useCrud('/users')
  // remove
  // const history = useHistory()
  // console.log(data)

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
        {[1, 2, 3, 4, 5].map((user) => {
          return (
            <h1 key={user}>{user}</h1>
          )
        })}
        // <Item data={link} />
        // <Item data={link} />
        // <Item data={link} />
        // <Item data={link} />
      </ul>
      <Link to={link}>
        <CircleButton />
      </Link>
    </section>
  )
}
