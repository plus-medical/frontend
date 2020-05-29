/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import LaboratoryExam from '../../../pages/LaboratoryExam/index'

describe('<LaboratoryExam />', () => {
  test('Render shallow in LaboratoryExam component', () => {
    const laboratoryExam = shallow(
      <RouterMock>
        <LaboratoryExam />
      </RouterMock>
    )
    expect(laboratoryExam.length).toEqual(1)
  })
  test('Render mount in LaboratoryExam component', () => {
    const laboratoryExam = mount(
      <RouterMock>
        <LaboratoryExam />
      </RouterMock>
    )
    expect(laboratoryExam.length).toEqual(1)
  })
})
