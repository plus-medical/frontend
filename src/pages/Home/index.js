import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Logo from '../../assets/images/logotipoBlue.png'
import Talk from '../../assets/images/talk.gif'
import Doctor from '../../assets/images/doctor.jpg'
import Hospital from '../../assets/images/hospital.gif'

export function Home () {
  return (
    <div className='home'>
      <header className='home_general'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <div />
        <nav>
          <ul className='home_general__nav'>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/login' className='form-button primary'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='home_general__main'>
        <section className='home_general__title'>
          <h1>En <label className='home_general__title-font'>Plus Medical</label> nos preocupamos por ti </h1>
          <div className='home_general__list'>
            <ul>
              <li>
                <strong>QUÉDATE</strong> en casa lo máximo posible
              </li>
              <li>
                <strong>MANTÉN</strong> el distanciamiento social
              </li>
              <li>
                <strong>LÁVATE</strong> las manos con frecuencia
              </li>
              <li>
                <strong>TOSE</strong> cubriéndote con el codo
              </li>
              <li>
                <strong>LLAMA</strong> si tienes síntomas
              </li>
            </ul>
          </div>
        </section>
        <div className='home_general__img'>
          <img src={Talk} alt='imagen consulta' />
        </div>
        <div className='home_general__img'>
          <img src={Doctor} alt='imagen plata medica' />
        </div>
        <h2 className='home_general__title home_general__title-margin'> Una planta profesionales Medicos de alta calidad </h2>

        <h2 className='home_general__title home_general__title-margin'> Nuestras instalaciones cuentan con la tecnologia más avanzada </h2>
        <div className='home_general__img'>
          <img src={Hospital} alt='imagen plata fisica' />
        </div>

      </main>

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
    </div>
  )
}
