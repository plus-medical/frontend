import React, { useContext, useEffect } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Photo from '../../components/photo/index'
import { AuthContext } from '../../utils/Auth/AuthContext'
import { MessageContext } from '../../utils/Messages/MessageContext'
import { useCrud } from '../../utils/Crud/useCrud'
import Loader from '../../components/Loading'
import { format } from 'date-fns'

export default function User (props) {
  const { loading, get } = useCrud('users', false)
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      name: {
        fist: '',
        last: ''
      },
      documentType: '',
      document: '',
      birthdate: '',
      gender: '',
      role: '',
      email: '',
      address: {
        city: '',
        street: ''
      },
      phone: ''
    }
  })
  const { handleSignUp } = useContext(AuthContext)
  const { setMessage } = useContext(MessageContext)

  const onSubmit = async (data) => {
    const result = await handleSignUp(data)
    setMessage(result)
  }

  useEffect(() => {
    const id = props.match.params.id
    if (id) {
      get(`/?_id=${id}`).then((res) => {
        const user = res.data[0]
        const birthdate = format(new Date(user.birthdate), 'yyyy-MM-dd')
        setValue('name.first', user.name.first)
        setValue('name.last', user.name.last)
        setValue('documentType', user.documentType)
        setValue('document', user.document)
        setValue('birthdate', birthdate)
        setValue('gender', user.gender)
        setValue('role', user.role)
        setValue('email', user.email)
        setValue('address.city', user.address.city)
        setValue('address.street', user.address.street)
        setValue('phone', user.phone)
      })
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loading && (<Loader />)}
      <div className='user-info'>
        <div className='user-info__title'>Información del usuario</div>
        <div className='user-info__grid'>
          <div className='user-info__photo'>
            <Photo />
          </div>
          <div className='user-info__data'>
            <div className='form-group'>
              <label className='form-label' htmlFor='firstname'>Nombre completo</label>
              <input
                id='firstname'
                className='form-input'
                type='text'
                aria-label='Nombre completo'
                autoComplete='true'
                name='name.first'
                ref={register({ required: true })}
              />
              {errors['name.first'] && <span className='form-input__error'>se requiere el nombre completo</span>}
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='lastname'>Apellidos</label>
              <input
                id='lastname'
                className='form-input'
                type='text'
                aria-label='Apellido'
                autoComplete='true'
                name='name.last'
                ref={register({ required: true })}
              />
              {errors['name.last'] && <span className='form-input__error'>se requiere el apellido</span>}
            </div>
          </div>
        </div>

        <div className='user-info__grid'>
          <div className='form-group'>
            <label className='form-label' htmlFor='typeDNI'>Tipo</label>
            <select
              name='documentType'
              id='typeDNI'
              className='form-select'
              ref={register({ required: true })}
            >
              <option />
              <option value='TI'>TI</option>
              <option value='CC'>CC</option>
              <option value='NIT'>NIT</option>
            </select>
            {errors.documentType && <span className='form-input__error'>se requiere el tipo de documento</span>}
          </div>
          <div className='user-info__dni'>
            <div className='form-group'>
              <label className='form-label' htmlFor='dni'>Número de documento</label>
              <input
                id='dni'
                className='form-input'
                type='text'
                aria-label='Numero de documento'
                autoComplete='true'
                ref={register({ required: true })}
                name='document'
              />
              {errors.document && <span className='form-input__error'>se requiere el apellido</span>}
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='birthdate'>Fecha de nacimiento</label>
          <input
            id='birthdate'
            className='form-input'
            type='date'
            autoComplete='true'
            name='birthdate'
            ref={register({ required: true })}
          />
          {errors.birthdate && <span className='form-input__error'>se requiere el fecha de nacimiento</span>}
        </div>
        <div className='user-info__gender'>
          <div>
            <input type='radio' id='male' name='gender' value='M' ref={register()} />
            <label htmlFor='male' className='form-label'>Male</label>
          </div>
          <div>
            <input type='radio' id='female' name='gender' value='F' ref={register()} />
            <label htmlFor='female' className='form-label'>Female</label>
          </div>
        </div>
      </div>

      <div className='user-auth'>
        <div className='form-group'>
          <div className='user-auth__title'>Datos de autenticación</div>
          <label className='form-label' htmlFor='role'>Rol</label>
          <select
            name='role'
            id='role'
            className='form-select'
            ref={register({ required: true })}
          >
            <option />
            <option value='patient'>Paciente</option>
            <option value='administrator'>Administrador</option>
            <option value='doctor'>Doctor</option>
            <option value='lab-worker'>Laboratorio</option>
          </select>
          {errors.role && <span className='form-input__error'>se requiere el rol</span>}
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='email-user'>Correo electrónico</label>
          <input
            id='email-user'
            className='form-input'
            type='mail'
            aria-label='ingresar Correo electronico'
            autoComplete='true'
            name='email'
            ref={register({ required: true })}
          />
          {errors.email && <span className='form-input__error'>se requiere el correo electronico</span>}
        </div>
      </div>
      <div className='user-auth'>
        <div className='user-auth__title'>Datos Personales</div>
        <div className='form-group'>
          <label className='form-label' htmlFor='Dirección'>Dirección</label>
          <input
            className='form-input'
            type='text'
            id='direccion'
            aria-label='Direccion'
            ref={register}
            name='address.street'
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='city'>Ciudad</label>
          <input
            className='form-input'
            type='text'
            id='city'
            aria-label='Ciudad'
            ref={register}
            name='address.city'
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='telefono'>Teléfono</label>
          <input
            className='form-input'
            type='tel'
            id='telefono'
            aria-label='telefono'
            ref={register({ pattern: /\(?([0-9]{3})\)?([ .-]?)?([0-9]{3})\2([0-9]{4})/ })}
            name='phone'
            maxLength='10'
          />
          {errors.phone && <span className='form-input__error'>se requiere digitar números</span>}
        </div>
        <div className='form-section__buttons'>
          <Link to='/users'>
            <button className='form-button__secondary'>Cancelar </button>
          </Link>
          <button submit='true' className='form-button__primary'>Guardar</button>
        </div>
      </div>
    </form>
  )
}
