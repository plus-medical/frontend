import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { Box } from '../../atoms/shapes'
import { TextMenu } from '../../atoms/texts'

import {
  FaHome,
  FaRegListAlt,
  FaBell,
  FaUser
} from 'react-icons/fa'

export function FooterMobile () {
  const MENUITEM = [
    {
      name: 'inicio',
      icon: <FaHome />,
      link: './login'
    },
    {
      name: 'tablero',
      icon: <FaRegListAlt />,
      link: './login'
    },
    {
      name: 'notificaciones',
      icon: <FaBell />,
      link: './login'
    },
    {
      name: 'perfil',
      icon: <FaUser />,
      link: './login'
    }
  ]

  return (
    <footer className='footerMobile'>
      <Box className='footerMobile__container' />
      <nav>
        <ul className='footerMobile__icons'>
          {MENUITEM.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.link} className='footerMobile_icons__item'>
                  <div className='footerMobile_icons_item__img'>
                    {item.icon}
                  </div>
                  <TextMenu data={item.name} />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
