/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Messages from '../../../components/messages/index'

describe('<Messages />', () => {
  test('Review shallow in Messages component', () => {
    const message = shallow(
      <RouterMock>
        <Messages />
      </RouterMock>
    )
    expect(message.length).toEqual(1)
  })
  test('Render mount in Messages component', () => {
    const message = mount(
      <RouterMock>
        <Messages />
      </RouterMock>
    )
    expect(message.length).toEqual(1)
  })
})
