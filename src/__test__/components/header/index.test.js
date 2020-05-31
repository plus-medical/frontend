/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import HeaderMobile from '../../../components/header/index'

describe('<HeaderMobile />', () => {
  test('Render mount in HeaderMobile component', () => {
    const headerMobile = mount(
      <RouterMock>
        <HeaderMobile />
      </RouterMock>
    )
    expect(headerMobile.length).toEqual(1)
  })
  test('check of back to navigate', () => {
    const headerMobile = mount(
      <RouterMock>
        <HeaderMobile />
      </RouterMock>
    )
    // console.log(headerMobile.find('button').html())
    expect(headerMobile.find('button').simulate('click'))
    // const mockCallBack = jest.fn()

    // const button = mount((<headerMobile onClick={mockCallBack}>Ok!</headerMobile>))
    // button.find('button').simulate('click')
    // expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
