import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import UploadFile from '../../components/uploadFile/index'
import './styles.scss'

export default function UploadUsers () {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      file: ''
    }
  })
  const onSubmit = (data) => { console.log(data) }

  return (
    <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
      <section className='upload-users'>
        <div className='upload-users__title'>Crear Usuarios</div>
        <Controller
          as={
            <UploadFile
              accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
            />
          }
          name='file'
          control={control}
          defaultValue=''
          type='file'
        />
        <div className='upload-users__buttons'>
          <Link to='/users'>
            <button className='upload-users__btn-secondary'>Cancelar </button>
          </Link>
          <button type='submit' className='upload-users__btn-primary'>Guardar</button>
        </div>
      </section>
    </form>
  )
}
