import React from 'react'
import './styles.scss'

import { Box } from '../../atoms/shapes/index'

import {
  FaArrowLeft,
  FaSearch
} from 'react-icons/fa'

export function Header () {
  return (
    <header>
      <Box>
        <FaArrowLeft />
        <FaSearch />
      </Box>
    </header>
  )
}
