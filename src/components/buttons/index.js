import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { FaPlus } from 'react-icons/fa'

export function CircleButton () {
  return (
    <Link to='/user' className='CircleButton'>
      <FaPlus />
    </Link>
  )
}
