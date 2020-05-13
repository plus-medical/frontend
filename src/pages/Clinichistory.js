import React from 'react'

export default function Clinichistory () {
  return (
    <form className='clinichistory'>
      <input
        type='text'
        placeholder='Razon de la consulta'
        aria-label='Razon de la consulta'
      />
      <input
        type='text'
        placeholder='exploración'
        aria-label='exploración'
      />
      <input
        type='text'
        placeholder='analisis'
        aria-label='analisis'
      />
      <input
        type='text'
        placeholder='diagnostico'
        aria-label='diagnostico'
      />
      <input
        type='text'
        placeholder='evolucion'
        aria-label='evolucion'
      />
      <input
        type='text'
        placeholder='orden medica'
        aria-label='orden medica'
      />
      <input
        type='text'
        placeholder='farmacologia'
        aria-label='farmacologia'
      />
      <input
        type='search'
        placeholder='busqueda de examenes'
        aria-label='busqueda de examenes'
      />
      <button>
        guardar
      </button>
      <button>
        abandonar
      </button>
    </form>
  )
}
