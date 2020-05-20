import React from 'react'

export function DetailPatientExam () {
  return (
    <section className='detailpatientexam'>
      <h4>nombre</h4>
      <p>peter</p>
      <h4>Documento</h4>
      <p>12342</p>
      <h4>telefono</h4>
      <p>3003233</p>
      <h4>fecha de nacimiento</h4>
      <p> martes 18 de junio </p>
      <h4>genero</h4>
      <p>m</p>
      <ul className='item'>
        <h3 className=''>
          Resultado
        </h3>
        <li>
          <div>
            <label> Exam </label>
            <label> doctor </label>
            <label>Fecha</label>
          </div>
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
