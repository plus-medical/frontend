import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import UploadFile from '../../components/uploadFile/index'

import DEFAULT_IMAGE from '../../assets/images/default.png'

export const LaboratoryResult = ({ name = 'Nicola Tesla', docType = 'CC', doc = 12345678, age = 36 }) => {
  return (
    <div>
      <div className='exam-patient'>
        <div className='exam-patient__title'>Información del paciente</div>
        <div className='exam-patient__grid'>
          <div className='exam-patient__photo'>
            <img src={DEFAULT_IMAGE} alt='Foto del usuario' />
          </div>
          <div className='exam-patient__data'>
            <span>{name}</span>
            <span>{`${docType} ${doc}`}</span>
            <span>{`${age} Años`}</span>
          </div>
        </div>
      </div>
      <div className='exam-result'>
        <div className='exam-result__title'>Resultado del Examen</div>
        <div className='form-group'>
          <div className='exam-result__label'>Examen</div>
          <input
            className='exam-result__name'
            type='text'
            id='direccion'
            aria-label='Direccion'
            name='address.street'
          />
        </div>
        <div className='form-group'>
          <div className='exam-result__label'>Descripción</div>
          <textarea className='exam-result__result' />
        </div>

        <div className='exam-result__label'>Adjunto</div>
        <div className='patient-exams'>
          <UploadFile />
        </div>
        <div className='upload-result__buttons'>
          <Link to='/dashboard'>
            <button className='upload-result__btn-secondary'>Cancelar </button>
          </Link>
          <button type='submit' className='upload-users__btn-primary'>Guardar</button>
        </div>
      </div>
    </div>
  )
}
