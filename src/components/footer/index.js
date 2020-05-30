import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

import {
  FaHome,
  FaRegListAlt,
  FaBell,
  FaUser
} from 'react-icons/fa'

export default function FooterMobile () {
  const MENUITEM = [
    {
      name: 'Inicio',
      icon: <FaHome />,
      link: '/'
    },
    {
      name: 'Tablero',
      icon: <FaRegListAlt />,
      link: '/dashboard'
    },
    {
      name: 'Notificaciones',
      icon: <FaBell />,
      link: '/notifications'
    },
    {
      name: 'Perfil',
      icon: <FaUser />,
      link: '/profile'
    }
  ]

  return (
    <footer className='footerMobile'>
      <div className='footerMobile__container' />
      <nav>
        <ul className='footerMobile__icons'>
          {MENUITEM.map((item) => {
            return (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  exact
                  activeClassName='active'
                  className='footerMobile__item'
                >
                  <div className='footerMobile__img'>
                    {item.icon}
                  </div>
                  <label className='footerMobile__description'>
                    {item.name}
                  </label>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
