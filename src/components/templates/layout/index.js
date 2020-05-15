import React from 'react'
import { FooterMobile } from '../../organisms/footer'
import { HeaderMobile } from '../../organisms/header'

export function LayoutMobile ({ children }) {
  return (
    <div className='App'>
      <HeaderMobile />
      {children}
      <FooterMobile />
    </div>
  )
}
