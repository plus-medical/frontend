import React, { useEffect } from 'react'
import './style.scss'
import Item from '../../components/itemDashboard'
import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
// import Loader from '../../components/Loading'
// import Message from '../../components/messages'
import { Link } from 'react-router-dom'

const labs = [
  {
    _id: 1,
    lab_name: 'IDIMENS'
  },
  {
    _id: 2,
    lab_name: 'LAB COLCAN'
  },
  {
    _id: 3,
    lab_name: 'HEALTHY'
  }
]

export default function SearchPatient () {
  const { register, handleSubmit } = useForm()
  // const { data, loading, get } = useCrud('laboratory', true)
  const { data } = useCrud('laboratory', true)

  const onSubmit = (res, e) => { console.log(res) }

  useEffect(() => {

  }, [data])

  return (
    <section className='labs'>
      <form
        className='labs__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='sticky'>
          <input
            type='search'
            placeholder='Buscar Examen'
            aria-label='busqueda de examenes'
            className='labs__input'
            name='search'
            ref={register}
          />
        </div>
      </form>
      <ul className='labs__list'>
        {labs.map((lab, index) => (
          <Item
            key={lab._id}
            id={lab._id}
            icon='laboratory'
            itemText={lab.lab_name}
            path='laboratory'
          />
        ))}
      </ul>
      <Link to='laboratory'>
        <CircleButton />
      </Link>
    </section>
  )
}
