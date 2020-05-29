import React from 'react'
import LoadingGif from '../../assets/images/loading.gif'
import './styles.scss'

export default function Loading () {
  return (
    <div className='loading'>
      <img src={LoadingGif} alt='Cargando' />
    </div>
  )
}
