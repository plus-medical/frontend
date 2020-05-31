import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './styles.scss'
import Title from '../title'
import { FiLogOut } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa'
import { AuthContext } from '../../utils/Auth/AuthContext'

export default function HeaderMobile () {
  const { handleLogout } = useContext(AuthContext)
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
        <li>
          <button onClick={() => handleLogout()}>
            <a>
              <FiLogOut />
            </a>
          </button>
        </li>
      </ul>
    </header>
  )
}
