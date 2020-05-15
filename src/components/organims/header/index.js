import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { Box } from '../../atoms/shapes/index'

import {
  FaArrowLeft,
  FaSearch
} from 'react-icons/fa'

export function Header () {
  return (
    <header className='headerMobile'>
      <Box />
      <ul className='headerMobile__content'>
        <li>
          <Link>
            <FaArrowLeft />
          </Link>
        </li>
        <li>
          <p>porfa</p>
        </li>
        <li>
          <Link to='/'>
            <FaSearch />
          </Link>
        </li>
      </ul>
    </header>
  )
}
