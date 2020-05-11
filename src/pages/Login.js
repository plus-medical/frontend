import React from 'react'

export default function Login() {
  return (
    <section className="login">
      <input
        type="text"
        aria-label="Numero de identicacion"
        placeholder="Numero de Identificacion"
      />
      <input
        type="password"
        placeholder="Contraseña"
        aria-label="Contraseña"
      />
      <button
        aria-label="button iniciar session"
      >
        iniciar sersión
      </button>
      <button aria-label="recuperar contraseña">
        <a href="/">olvido su contraseña</a>
      </button>
    </section>
  )
}
