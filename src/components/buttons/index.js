import React from 'react'
import './styles.scss'

import { FaPlus } from 'react-icons/fa'

export default function CircleButton ({ data }) {
  return (
    <button to={data} className='CircleButton'>
      <FaPlus />
    </button>
  )
}
