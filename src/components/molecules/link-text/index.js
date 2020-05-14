import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export function LinkText ({ text, to }) {
  return <Link className='link-text' to={to}>{text}</Link>
}
