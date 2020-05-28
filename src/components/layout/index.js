import React from 'react'
import './styles.scss'
import { FooterMobile } from '../footer'
import { HeaderMobile } from '../header'

export function LayoutMobile ({ children }) {
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
