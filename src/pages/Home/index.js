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
    </div>
  )
}
