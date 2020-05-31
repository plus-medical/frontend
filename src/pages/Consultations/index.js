import React from 'react'
import ItemDate from '../../components/ItemDate/index'
import DEFAULT_IMAGE from '../../assets/images/default.png'
import IMG_CALENDAR from '../../assets/images/calendar.png'

export default function index ({ name = 'Nicola Tesla', docType = 'CC', doc = 12345678, age = 36 }) {
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
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <ItemDate key={index} img={IMG_CALENDAR} />
        )
      })}
    </div>
  )
}
