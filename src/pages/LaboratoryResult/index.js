import React, { useState } from 'react'
import './styles.scss'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import DEFAULT_IMAGE from '../../assets/images/default.png'

export const LaboratoryResult = ({ name = 'Nicola Tesla', docType = 'CC', doc = 12345678, age = 36 }) => {
  const [fileName, setFileName] = useState('Cargar Resultado')

  const handleFileUpload = () => {
    const fileNameSelected = document.getElementById('exam-result__file-upload').value
    const fileNameResult = fileNameSelected.split('\\').pop().split('/').pop()
    setFileName(fileNameResult)
  }

  return (
    <div>
      <div className='form-section'>
        <div className='form-section__title'>Información del paciente</div>
        <div className='exam-patient'>
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
      <div className='form-section'>
        <div className='form-section__title'>Resultado del Examen</div>
        <div className='exam-result__subtitle'>Examen</div>
        <input
          className='exam-result__name'
          type='text'
          id='direccion'
          aria-label='Direccion'
          name='address.street'
        />
        <div className='exam-result__subtitle'>Descripción</div>
        <textarea className='exam-result__result' />

        <div className='exam-result__subtitle'>Adjunto</div>
        <div className='patient-exams'>
          <label className='exam-result__label'>
            <FaCloudUploadAlt className='exam-result__icon-upload' />
            <span id='exam-result__file-selected' />
            <input
              type='file'
              id='exam-result__file-upload'
              className='exam-result__file-upload'
              onChange={handleFileUpload}
            />
            {fileName}
          </label>
          <label />
          <div className='form-section__buttons'>
            <Link to='/dashboard'>
              <button className='form-button secondary'>Cancelar </button>
            </Link>
            <button type='submit' className='form-button primary'>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
