import React from 'react'
import './styles.scss'
import { FaGreaterThan, FaFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import DEFAULT_IMAGE from '../../assets/images/default.png'

export const LaboratoryExam = ({ name = 'Nicola Tesla', docType = 'CC', doc = 12345678, age = 36 }) => {
  return (
    <div>
      <div className='form-section'>
        <div className='form-section__title'>Información del paciente</div>
        <div className='patient-info'>
          <div className='patient-info__photo'>
            <img src={DEFAULT_IMAGE} alt='Foto del usuario' />
          </div>
          <div className='patient-info__data'>
            <span>{name}</span>
            <span>{`${docType} ${doc}`}</span>
            <span>{`${age} Años`}</span>
          </div>
        </div>
      </div>
      <div className='form-section'>
        <div className='form-section__title'>Exámenes</div>
        <div className='patient-exams'>
          <ul>
            {[1, 2, 3, 4, 5].map((exam) => (
              <li key={exam}>
                <Link to='/laboratoryresult'>
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
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
