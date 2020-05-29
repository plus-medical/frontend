/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import SearchLaboratories from '../../../pages/SearchLaboratories/index'

describe('<SearchLaboratories />', () => {
  test('Render shallow in SearchLaboratories component', () => {
    const searchLaboratories = shallow(
      <RouterMock>
        <SearchLaboratories />
      </RouterMock>
    )
    expect(searchLaboratories.length).toEqual(1)
  })
  test('Render mount in SearchLaboratories component', () => {
    const searchLaboratories = mount(
      <RouterMock>
        <SearchLaboratories />
      </RouterMock>
    )
    expect(searchLaboratories.length).toEqual(1)
  })
})
