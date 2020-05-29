/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Login from '../../../pages/Login/index'

describe('<Login />', () => {
  test('Render shallow in Login component', () => {
    const login = shallow(
      <RouterMock>
        <Login />
      </RouterMock>
    )
    expect(login.length).toEqual(1)
  })
})
