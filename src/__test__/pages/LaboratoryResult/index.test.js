/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import LaboratoryResult from '../../../pages/LaboratoryResult/index'

describe('<LaboratoryResult />', () => {
  test('Render shallow in LaboratoryResult component', () => {
    const laboratoryResult = shallow(
      <RouterMock>
        <LaboratoryResult />
      </RouterMock>
    )
    expect(laboratoryResult.length).toEqual(1)
  })
  test('Render mount in LaboratoryResult component', () => {
    const laboratoryResult = mount(
      <RouterMock>
        <LaboratoryResult />
      </RouterMock>
    )
    expect(laboratoryResult.length).toEqual(1)
  })
})
