/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import SearchUsers from '../../../pages/SearchUsers/index'

describe('<SearchUsers />', () => {
  test('Render shallow in SearchUsers component', () => {
    const searchPatient = shallow(
      <RouterMock>
        <SearchUsers />
      </RouterMock>
    )
    expect(searchPatient.length).toEqual(1)
  })
})
