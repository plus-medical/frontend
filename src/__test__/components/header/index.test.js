/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import HeaderMobile from '../../../components/header/index'

describe('<HeaderMobile />', () => {
  test('Review shallow in HeaderMobile component', () => {
    const headerMobile = shallow(
      <RouterMock>
        <HeaderMobile />
      </RouterMock>
    )
    expect(headerMobile.length).toEqual(1)
  })
  test('Render mount in HeaderMobile component', () => {
    const headerMobile = mount(
      <RouterMock>
        <HeaderMobile />
      </RouterMock>
    )
    expect(headerMobile.length).toEqual(1)
  })
})
