import React, { useEffect } from 'react'
import './style.scss'
import Item from '../../components/itemDashboard'
import CircleButton from '../../components/buttons/index'
import { useForm } from 'react-hook-form'
import { useCrud } from '../../utils/Crud/useCrud'
// import Loader from '../../components/Loading'
// import Message from '../../components/messages'
import { Link } from 'react-router-dom'

const exams = [
  {
    _id: 1,
    exam_name: 'HELICOBACTER EN HECES'
  },
  {
    _id: 2,
    exam_name: 'HEMOGLOBINA GLICOSILADA'
  },
  {
    _id: 3,
    exam_name: 'INSULINA'
  }
]

export default function SearchPatient () {
  const { register, handleSubmit } = useForm()
  // const { data, loading, get } = useCrud('exam', true)
  const { data } = useCrud('exam', true)

  const onSubmit = (res, e) => { console.log(res) }

  useEffect(() => {

  }, [data])

  return (
    <section className='exams'>
      <form
        className='exams__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='sticky'>
          <input
            type='search'
            placeholder='Buscar Examen'
            aria-label='busqueda de examenes'
            className='exams__input'
            name='search'
            ref={register}
          />
        </div>
      </form>
      <ul className='exams__list'>
        {exams.map((exam, index) => (
          <Item
            key={exam._id}
            id={exam._id}
            icon='exam'
            itemText={exam.exam_name}
            path='exam'
          />
        ))}
      </ul>
      <Link to='exam'>
        <CircleButton />
      </Link>
    </section>
  )
}
