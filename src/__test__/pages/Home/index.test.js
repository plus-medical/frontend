/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Home from '../../../pages/Home/index'

describe('<Home />', () => {
  test('Render shallow in Home component', () => {
    const home = shallow(
      <RouterMock>
        <Home />
      </RouterMock>
    )
    expect(home.length).toEqual(1)
  })
})
