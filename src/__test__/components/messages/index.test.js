/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Messages from '../../../components/messages/index'

describe('<Messages />', () => {
  test('Render mount in Messages component', () => {
    const message = mount(
      <RouterMock>
        <Messages />
      </RouterMock>
    )
    expect(message.length).toEqual(1)
  })

  test('check of back to navigate', () => {
    const headerMobile = mount(
      <RouterMock>
        <Messages />
      </RouterMock>
    )
    console.log(headerMobile.find('selectIcon'))
    // expect(headerMobile.find('button').simulate('click'))
    // const mockCallBack = jest.fn()

    // const button = mount((<headerMobile onClick={mockCallBack}>Ok!</headerMobile>))
    // button.find('button').simulate('click')
    // expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
