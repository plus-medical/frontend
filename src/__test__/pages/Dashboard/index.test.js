/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Dashboard from '../../../pages/Dashboard/index'

describe('<Dashboard />', () => {
  test('Render shallow in Dashboard component', () => {
    const dashboard = shallow(
      <RouterMock>
        <Dashboard />
      </RouterMock>
    )
    expect(dashboard.length).toEqual(1)
  })
  test('Render mount in Dashboard component', () => {
    const dashboard = mount(
      <RouterMock>
        <Dashboard />
      </RouterMock>
    )
    expect(dashboard.length).toEqual(1)
  })
})
