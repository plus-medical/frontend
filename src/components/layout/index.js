import React from 'react'
import FooterMobile from '../footer/index'
import HeaderMobile from '../header/index'
import './styles.scss'

export default function LayoutMobile ({ children }) {
  return (
    <div className='App'>
      <HeaderMobile />
      <main className='layout__main'>
        {children}
      </main>
      <FooterMobile />
    </div>
  )
}
