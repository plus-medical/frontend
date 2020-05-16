import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './styles.scss'

import {
  FaArrowLeft,
  FaSearch
} from 'react-icons/fa'

export function HeaderMobile () {
  const location = useLocation()
  const history = useHistory()
  return (
    <header className='headerMobile'>
      <div className='box' />
      <ul className='headerMobile__content'>
        <li>
          <button onClick={() => history.goBack()}>
            <a>
              <FaArrowLeft />
            </a>
          </button>
        </li>
        <li>
          <p>{location.pathname}</p>
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
