import React from 'react'

export default function User() {
  return (
    <section className='User'>
      <div className='user__header'>
        <img src='' alt='' />
        <input type='text' placeholder='Nombre'></input>
        <input type='text' placeholder='Tipo'></input>
        <input type='text' placeholder='Documento'></input>
        <input type='text' placeholder='Rol'></input>
      </div>
      <div className='user__container'>
        <h4>Datos autenticacion</h4>
        <input type='text' placeholder='Correo electronico'></input>
        <input type='text' placeholder='Label'></input>
        <button className='button' className='button'>Generar contraseña</button>
        <input type='text' placeholder='Label'></input>
        <h4>Datos Personales</h4>
        <input type='text' placeholder='Fecha de nacimiento'></input>
        <input type='text' placeholder='Genero'></input>
        <input type='text' placeholder='Direccion'></input>
        <input type='text' placeholder='Telefono'></input>
      </div>
    </section>
  )
}
