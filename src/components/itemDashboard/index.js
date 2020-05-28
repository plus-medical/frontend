import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsers, FaFileMedicalAlt, FaFlask, FaGreaterThan, FaBookMedical } from 'react-icons/fa'

export default function ItemDashboard ({ icon, path, itemText }) {
  const selectIcon = () => {
    switch (icon) {
      case 'user':
        return <FaUsers />
      case 'exam':
        return <FaFileMedicalAlt />
      case 'laboratory':
        return <FaFlask />
      case 'consultation':
        return <FaBookMedical />
    }
  }
  return (
    <Link to={path}>
      <div className='dashboard-item'>
        <div className='dashboard-item__img'>
          {selectIcon()}
        </div>
        <div className='dashboard-item__txt'>
          {itemText}
        </div>
        <div className='dashboard-item__togo'>
          <FaGreaterThan />
        </div>
      </div>
    </Link>
  )
}
