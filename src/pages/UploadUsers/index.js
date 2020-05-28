import React from 'react'
import { Link } from 'react-router-dom'
import UploadFile from '../../components/uploadFile/index'
import './styles.scss'

export default function UploadUsers () {
  return (
    <section className='upload-users'>
      <div className='upload-users__title'>Crear Usuarios</div>
      <UploadFile accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' />
      <div className='upload-users__buttons'>
        <Link to='/users'>
          <button className='upload-users__btn-secondary'>Cancelar </button>
        </Link>
        <button type='submit' className='upload-users__btn-primary'>Guardar</button>
      </div>
    </section>
  )
}
