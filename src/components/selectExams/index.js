import React from 'react'
import './styles.scss'

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
  },
  {
    _id: 4,
    exam_name: 'HELICOBACTER EN HECES'
  },
  {
    _id: 5,
    exam_name: 'HEMOGLOBINA GLICOSILADA'
  },
  {
    _id: 6,
    exam_name: 'INSULINA'
  },
  {
    _id: 7,
    exam_name: 'HELICOBACTER EN HECES'
  },
  {
    _id: 8,
    exam_name: 'HEMOGLOBINA GLICOSILADA'
  },
  {
    _id: 9,
    exam_name: 'INSULINA'
  }
]

export default function SelectExams () {
  return (
    <div className='select-exams'>
      <ul className='select-exams__list'>
        {exams.map((exam, index) => (
          <li key={index} className='select-exams__item'>
            <input className='select-exams__checkbox' type='checkbox' id={`exam_${index}`} />
            <label htmlFor={`exam_${index}`}>{exam.exam_name}</label>
          </li>
        )
        )}
      </ul>
    </div>
  )
}
