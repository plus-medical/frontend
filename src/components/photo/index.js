import React from 'react'
import DEFAULT_IMAGE from '../../assets/images/default.png'
import './styles.scss'

export default function Photo ({ photo = DEFAULT_IMAGE }) {
  return (
    <div className='image-upload'>
      <label htmlFor='file-input'>
        <img src={photo} />
      </label>
      <input id='file-input' type='file' accept='image/*' />
    </div>
  )
}
