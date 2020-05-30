import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../icons'
import './styles.scss'

export default function ItemDashboard ({ id, icon, path, itemText }) {
  return (
    <Link to={id ? `${path}/${id}` : path}>
      <div className='dashboard-item'>
        <div className='dashboard-item__img'>
          <Icon icon={icon} />
        </div>
        <div className='dashboard-item__txt'>
          {itemText}
        </div>
        <div className='dashboard-item__togo'>
          <Icon icon='next' />
        </div>
      </div>
    </Link>
  )
}
