/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
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
})
