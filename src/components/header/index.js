import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './styles.scss'
import Title from '../title'

import { FaArrowLeft } from 'react-icons/fa'

export default function HeaderMobile () {
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
          <Title pathname={location.pathname} />
        </li>
      </ul>
    </header>
  )
}
