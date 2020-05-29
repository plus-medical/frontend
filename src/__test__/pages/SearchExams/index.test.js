/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import SearchExams from '../../../pages/SearchExams/index'

describe('<SearchExams />', () => {
  test('Render shallow in SearchExams component', () => {
    const searchExam = shallow(
      <RouterMock>
        <SearchExams />
      </RouterMock>
    )
    expect(searchExam.length).toEqual(1)
  })
})
