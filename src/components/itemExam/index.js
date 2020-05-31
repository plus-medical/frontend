import React from 'react'
import './styles.scss'
import { FaGreaterThan, FaFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ItemExam ({ exam, link }) {
  return (
    <li>
      <Link to={`${link}/${exam}`}>
        <div className='patient-exams__item'>
          <div className='patient-exams__img'>
            <FaFileAlt className='patient-exams__icon' />
          </div>
          <div className='patient-exams__txt'>
            {`Examen ${exam}`}
          </div>
          <div className='patient-exams__togo'>
            <FaGreaterThan />
          </div>
        </div>
      </Link>
    </li>
  )
}
