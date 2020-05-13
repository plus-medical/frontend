import React from 'react'
import { Link } from 'react-router-dom'

export const Exam = () => {
  return (
    <form>
      <input placeholder='Nombre del examen' />
      <div className='item-state'>
        <select name='status'>
          <option value='1'>Activo</option>
          <option value='2'>Inactivo</option>
        </select>
      </div>
      <div>
        <button className='Button'>Guardar</button>
      </div>
      <div>
        <Link to='/dashboard'>
          <button className='Button'>Cancelar </button>
        </Link>
      </div>
    </form>
  )
}
