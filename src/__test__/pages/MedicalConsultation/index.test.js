/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import MedicalConsultation from '../../../pages/MedicalConsultation/index'

describe('<MedicalConsultation />', () => {
  test('Render shallow in MedicalConsultation component', () => {
    const medicalConsultation = shallow(
      <RouterMock>
        <MedicalConsultation />
      </RouterMock>
    )
    expect(medicalConsultation.length).toEqual(1)
  })
})
