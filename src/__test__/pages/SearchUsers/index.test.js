/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
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
  test('Render mount in SearchUsers component', () => {
    const searchPatient = mount(
      <RouterMock>
        <SearchUsers />
      </RouterMock>
    )
    expect(searchPatient.length).toEqual(1)
  })
})
