import React, { useEffect, useState } from 'react'
import './styles.scss'

export default function Title ({ pathname }) {
  const [title, setTitle] = useState([])

  useEffect(() => {
    const pathArray = pathname.split('/')

    switch (pathArray[1]) {
      case 'dashboard':
        setTitle('Menú Principal')
        break
      case 'users':
        setTitle('Usuarios')
        break
      case 'user':
        pathArray[2] ? setTitle('Editar Usuario') : setTitle('Crear Usuario')
        break
      case 'exams':
        setTitle('Exámenes')
        break
      case 'laboratories':
        setTitle('Laboratorios')
        break
      case 'laboratory':
        pathArray[2] ? setTitle('Editar Laboratorio') : setTitle('Crear Laboratorio')
        break
      case 'exam':
        pathArray[2] ? setTitle('Editar Examen') : setTitle('Crear Examen')
        break
      case 'notifications':
        setTitle('Notificaciones')
        break
      case 'profile':
        setTitle('Perfil')
        break
      case 'consultations':
        setTitle('Consultas Médicas')
        break
      default:
        setTitle('')
        break
    }
  }
  )

  if (title !== '') {
    document.title = title
  }

  return (
    <span className='title'>{title}</span>
  )
}
