import React from 'react'

export function Detailpatientexam () {
  return (
    <section className='detailpatientexam'>
      <h4>examen</h4>
      <h4>Doctor</h4>
      <h4>fecha</h4>
      <ul className='item'>
        <li>
          <h4 className=''>
            Resultado
          </h4>
          <input
            type='password'
            placeholder='descripcion del resultado'
            aria-label='descripcion del resultado'
          />
        </li>
      </ul>
      <button
        className='button'
      >
        agregar
      </button>
      <button
        className='button'
      >
        guardar
      </button>
    </section>
  )
}
