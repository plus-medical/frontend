import React from 'react'
import { Link } from 'react-router-dom'

export function Home () {
  return (
    <div className='home'>
      <h1>Plus Medical - Frontend</h1>
      <h2>General</h2>
      <ul>
        <li>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link to='/userprofile'>
            <button>
              User Profile
            </button>
          </Link>
        </li>
      </ul>
      <h2>Administrador</h2>
      <ul>
        <li>
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
          <ul>
            <li>
              <h3>Usuarios</h3>
            </li>
            <li>
              <Link to='/users'>
                <button>Listado de usuarios</button>
              </Link>
            </li>
            <li>
              <Link to='/user'>
                <button>Crear usuario</button>
              </Link>
            </li>
            <li>
              <h3>Exámenes</h3>
            </li>
            <li>
              <Link to='/exams'>
                <button>Listado de examenes</button>
              </Link>
            </li>
            <li>
              <Link to='/exam'>
                <button>Crear Examen</button>
              </Link>
            </li>
            <li>
              <h3>Laboratorios</h3>
            </li>
            <li>
              <Link to='/Laboratories'>
                <button>Listado de laboratorios</button>
              </Link>
            </li>
            <li>
              <Link to='/Laboratory'>
                <button>Crear laboratorio</button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Doctor</h2>
      <ul>
        <li>
          <Link to='/searchpatient'>
            <button>
              Buscar paciente
            </button>
          </Link>
        </li>
        <li>
          Historia clínica
        </li>
        <li>
          Consulta Médica
        </li>
        <li>Examenes de laboratorio</li>
        <li>Diagnóstico médico</li>
      </ul>

      <h2>Laboratorio</h2>
      <ul>
        <li>
          <Link to='/searchpatient'>
            <button>
              Buscar paciente
            </button>
          </Link>
        </li>
        <li>
          <Link to='/detailexam'>
            Cargar Resultados
          </Link>
        </li>
      </ul>

      <h2>Paciente</h2>
      <ul>
        <li>
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
          <ul>
            <li>Consultas médicas</li>
            <li>Exámenes</li>
          </ul>
        </li>
      </ul>
      <button>
        <Link to='/clinichistory'> historia clinica</Link>
      </button>
      <button>
        <Link to='/detailpatientexam'> detalle exament </Link>
      </button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
        <li>item 6</li>
        <li>item 7</li>
        <li>item 8</li>
        <li>item 9</li>
        <li>item 10</li>
        <li>item 11</li>
        <li>item 12</li>
        <li>item 13</li>
        <li>item 14</li>
        <li>item 15</li>
        <li>item 16</li>
        <li>item 17</li>
        <li>item 18</li>
        <li>item 19</li>
        <li>item 20</li>
        <li>item 21</li>
      </ul>
    </div>
  )
}
