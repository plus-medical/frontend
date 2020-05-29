/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import SearchPatient from '../../../pages/SearchPatient/index'

describe('<SearchPatient />', () => {
  test('Render shallow in SearchPatient component', () => {
    const searchPatient = shallow(
      <RouterMock>
        <SearchPatient />
      </RouterMock>
    )
    expect(searchPatient.length).toEqual(1)
  })
})
