/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import User from '../../../pages/User/index'

describe('<User />', () => {
  test('Render shallow in User component', () => {
    const user = shallow(
      <RouterMock>
        <User />
      </RouterMock>
    )
    expect(user.length).toEqual(1)
  })
})
