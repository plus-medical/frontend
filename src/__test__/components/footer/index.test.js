/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import FooterMobile from '../../../components/footer/index'

describe('<FooterMobile />', () => {
  test('Render shallow in FooterMobile component', () => {
    const footerMobile = shallow(
      <RouterMock>
        <FooterMobile />
      </RouterMock>
    )
    expect(footerMobile.length).toEqual(1)
  })

  test('Render mount component FooterMobile', () => {
    const footerMobile = mount(
      <RouterMock>
        <FooterMobile />
      </RouterMock>
    )
    expect(footerMobile.length).toEqual(1)
  })
})
