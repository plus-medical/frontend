import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import DownloadFile from '../../components/Download/index'
import './styles.scss'

export default function UploadUsers () {
  const history = useHistory()
  return (
    <section className='upload-users'>
      <div className='upload-users__title'>Descargar examen</div>
      <DownloadFile accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' />
      <div className='upload-users__buttons'>
        <Link to='/users'>
          <button
            onClick={() => history.goBack()}
            className='upload-users__btn-secondary'
          >
            Cancelar
          </button>
        </Link>
        <button
          onClick={() => history.goBack()}
          type='submit'
          className='upload-users__btn-primary'
        >
          Guardar
        </button>
      </div>
    </section>
  )
}
