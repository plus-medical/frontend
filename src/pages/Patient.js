import React from 'react'

export const Patient = () => {
  return (
    <section className='patient'>
      <div className='patient-input'>
        <input
          type='search'
          placeholder='Número de documento'
          aria-label='Numero de documento'
        />
        <button>Buscar</button>
      </div>
    </section>
  )
}
