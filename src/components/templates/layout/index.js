import React from 'react'
import './styles.scss'
import { FooterMobile } from '../../organisms/footer'
import { HeaderMobile } from '../../organisms/header'

export function LayoutMobile ({ children }) {
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
