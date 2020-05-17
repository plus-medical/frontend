import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './styles.scss'

import { FaArrowLeft } from 'react-icons/fa'

export function HeaderMobile () {
  const location = useLocation()
  const history = useHistory()
  return (
    <header className='headerMobile'>
      <div className='headerMobile__container' />
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
      </ul>
    </header>
  )
}
