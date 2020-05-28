/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import HeaderMobile from '../../../components/header/index'

describe('<HeaderMobile />', () => {
  test('Render component footer', () => {
    const headerMobile = shallow(
      <RouterMock>
        <HeaderMobile />
      </RouterMock>
    )
    expect(headerMobile.length).toEqual(1)
  })
})

describe('<HeaderMobile />', () => {
  const headerMobile = mount(
    <RouterMock>
      <HeaderMobile />
    </RouterMock>
  )

  test('Render component headerMobile', () => {
    expect(headerMobile.length).toEqual(1)
  })
})
