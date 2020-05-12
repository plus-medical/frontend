import React from 'react'

export default function Login() {
  return (
    <form className="login">
      <input
        type="mail"
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
      <button aria-label="recuperar contraseña">
        <a href="/users">usuarios</a>
      </button>
    </form>
  )
}
