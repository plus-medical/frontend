import React, { useState, useEffect } from 'react'
import './styles.scss'
import ItemExam from '../../components/itemExam/index'

import DEFAULT_IMAGE from '../../assets/images/default.png'

export default function LaboratoryExam ({ name = 'Nicola Tesla', docType = 'CC', doc = 12345678, age = 36 }) {
  const role = window.localStorage.getItem('role')
  const [link, setLink] = useState('')

  useEffect(() => {
    if (role === 'lab-worker') {
      setLink('/laboratoryresult')
    } else if (role === 'patient') {
      setLink('/myexam')
    }
  }, [])

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
            {[1, 2, 3, 4, 5].map((exam) => {
              return (
                <ItemExam key={exam} link={link} exam={exam} />
              )
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
