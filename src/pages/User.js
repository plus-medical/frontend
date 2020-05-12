import React from 'react'

export default function User () {
  return (
    <section className='User'>
      <div className='user__header'>
        <form>
          <img src='' alt='' />
          <input
            type='text'
            placeholder='Nombre'
            aria-label='Nombre'
          />
          <input
            type='text'
            placeholder='Apellido'
            aria-label='Apellido'
          />
          <select name='typeDNI'>
            <option value='1'>TI</option>
            <option value='2'>CC</option>
            <option value='3'>NIT</option>
          </select>
          <input
            type='text'
            placeholder='Numero de Documento'
            aria-label='Numero de documento'
          />
          <select name='Rol'>
            <option value='1'>Paciente</option>
            <option value='2'>Administrador</option>
            <option value='3'>Doctor</option>
            <option value='4'>Laboratorio</option>
          </select>
        </form>
      </div>
      <div className='user__container'>
        <h4>Datos autenticacion</h4>
        <form>
          <input
            type='mail'
            placeholder='Correo electronico'
            aria-label='ingresar Correo electronico'
          />
          <input
            type='password'
            placeholder='Contraseña generada'
            aria-label='contraseña generado'
          />
          <button
            className='button'
          >
            Generar contraseña
          </button>
        </form>
        <h4>Datos Personales</h4>
        <form>
          <h5> Genero </h5>
          <input type='date' placeholder='Fecha de nacimiento' />
          <input type='radio' id='male' name='gender' value='male' />
          <label htmlFor='male'>Male</label>
          <input type='radio' id='female' name='gender' value='female' />
          <label htmlFor='female'>Female</label>
          <input type='radio' id='other' name='gender' value='other' />
          <label htmlFor='other'>Other</label>
          <input
            type='text'
            placeholder='Direccion'
            aria-label='Direccion'
          />
          <input
            type='tel'
            placeholder='Telefono'
            aria-label='telefono'
          />
          <select name='status'>
            <option value='1'>activo</option>
            <option value='2'>Inactivo</option>
          </select>
          <button>
            guardar
          </button>
          <button>
            abandonar
          </button>
        </form>
      </div>
    </section>
  )
}
