/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
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
})
