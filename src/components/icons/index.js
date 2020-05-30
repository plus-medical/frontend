import React from 'react'
import { FaUsers, FaFileMedicalAlt, FaFlask, FaGreaterThan, FaBookMedical } from 'react-icons/fa'

export default function Icon ({ icon }) {
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
      case 'next':
        return <FaGreaterThan />
    }
  }
  return (
    <>
      {selectIcon()}
    </>
  )
}
