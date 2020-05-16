import React from 'react'
import './styles.scss'

import { ImageSearch } from '../../atoms/images'
import { NameSearch, DescriptionSearch } from '../../atoms/titles'
import { DocumentSearch } from '../../atoms/texts'

export function Item () {
  return (
    <li className='Item'>
      <ImageSearch />
      <article className='Item--content'>
        <NameSearch />
        <DocumentSearch />
        <DescriptionSearch />
      </article>
      <section className='Item--indicator' />
    </li>
  )
}
