/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import FooterMobile from '../../../components/footer/index'

describe('<FooterMobile />', () => {
  test('Render component footer', () => {
    const footerMobile = shallow(
      <RouterMock>
        <FooterMobile />
      </RouterMock>
    )
    expect(footerMobile.length).toEqual(1)
  })
})

describe('<FooterMobile />', () => {
  const footerMobile = mount(
    <RouterMock>
      <FooterMobile />
    </RouterMock>
  )

  test('Render component FooterMobile', () => {
    expect(footerMobile.length).toEqual(1)
  })
})
