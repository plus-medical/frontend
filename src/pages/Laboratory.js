import React from 'react'
import { Link } from 'react-router-dom'
export const Laboratory = () => {
  return (
    <section className='Laboratory'>
      <form>
        <input type='text' placeholder='Laborotario' />
        <input type='text' placeholder='NIT' />
        <input type='text' placeholder='Dirección' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Teléfono' />
        <select name='status'>
          <option value='1'>Activo</option>
          <option value='2'>Inactivo</option>
        </select>
        <button className='Button'>Guardar</button>
        <Link to='/dashboard'>
          <button className='Button'>Cancelar </button>
        </Link>
      </form>
    </section>
  )
}
