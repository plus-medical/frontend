/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
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
})
