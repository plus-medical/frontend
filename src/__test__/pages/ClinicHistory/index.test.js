/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import ClinicHistory from '../../../pages/ClinicHistory/index'

describe('<ClinicHistory />', () => {
  test('Render shallow in ClinicHistory component', () => {
    const clinicHistory = shallow(
      <RouterMock>
        <ClinicHistory />
      </RouterMock>
    )
    expect(clinicHistory.length).toEqual(1)
  })
})
