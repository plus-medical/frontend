/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Laboratory from '../../../pages/Laboratory/index'

describe('<Laboratory />', () => {
  test('Render shallow in Laboratory component', () => {
    const laboratory = shallow(
      <RouterMock>
        <Laboratory />
      </RouterMock>
    )
    expect(laboratory.length).toEqual(1)
  })
})
