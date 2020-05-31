/* eslint-disable no-undef */
import React from 'react'
import { mount, configure } from 'enzyme'
import HookMock from '../../../__mocks__/HookMock'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Login from '../../../pages/Login/index'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Login />', () => {
  test('Render mount in Login component', () => {
    const login = mount(
      <HookMock>
        <RouterMock>
          <Login />
        </RouterMock>
      </HookMock>
    )

    expect(login.length).toEqual(1)
  })
})
