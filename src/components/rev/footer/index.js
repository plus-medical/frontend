import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

import {
  FaHome,
  FaRegListAlt,
  FaBell,
  FaUser
} from 'react-icons/fa'

export function FooterMobile () {
  const MENUITEM = [
    {
      name: 'Inicio',
      icon: <FaHome />,
      link: './'
    },
    {
      name: 'Tablero',
      icon: <FaRegListAlt />,
      link: './dashboard'
    },
    {
      name: 'Notificaciones',
      icon: <FaBell />,
      link: './login'
    },
    {
      name: 'Perfil',
      icon: <FaUser />,
      link: './userprofile'
    }
  ]

  return (
    <footer className='footerMobile'>
      <div className='footerMobile__container box' />
      <nav>
        <ul className='footerMobile__icons'>
          {MENUITEM.map((item) => {
            return (
              <li key={item.name}>
                <NavLink to={item.link} exact activeClassName='active' className='footerMobile_icons__item'>
                  <div className='footerMobile_icons_item__img'>
                    {item.icon}
                  </div>
                  <label className='TextMenu'>{item.name}</label>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
