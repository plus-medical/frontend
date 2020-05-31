import React, { useContext, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './styles.scss'
import Title from '../title'
import { FiLogOut } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa'
import { AuthContext } from '../../utils/Auth/AuthContext'

export default function HeaderMobile () {
  const { handleLogout, authenticated } = useContext(AuthContext)
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    console.log(authenticated)
  }, [authenticated])
  return (
    <header className='headerMobile'>
      <div className='headerMobile__container' />
      <ul className='headerMobile__content'>
        <li>
          <button onClick={() => history.goBack()}>
            <a>
              <FaArrowLeft className='headerMobile__icon' />
            </a>
          </button>
        </li>
        <li>
          <Title pathname={location.pathname} />
        </li>
        <li>
          <button onClick={() => handleLogout()}>
            <a>
              <FiLogOut className='headerMobile__icon' />
            </a>
          </button>
        </li>
      </ul>
    </header>
  )
}
