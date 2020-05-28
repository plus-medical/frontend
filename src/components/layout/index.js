import React from 'react'
import './styles.scss'
import FooterMobile from '../footer/index'
import { HeaderMobile } from '../header'

export default function LayoutMobile ({ children }) {
  return (
    <div className='App'>
      <HeaderMobile />
      <main>
        {children}
      </main>
      <FooterMobile />
    </div>
  )
}
