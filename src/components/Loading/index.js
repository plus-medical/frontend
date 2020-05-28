import React from 'react'
import LoadingGif from '../../assets/images/loading.gif'
import './styles.scss'
function Loading () {
  return (
    <div className='loading'>
      <img src={LoadingGif} alt='Cargando' />
    </div>
  )
}
export default Loading
