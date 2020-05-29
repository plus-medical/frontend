/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
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
  test('Render mount in SearchExams component', () => {
    const searchExams = mount(
      <RouterMock>
        <SearchExams />
      </RouterMock>
    )
    expect(searchExams.length).toEqual(1)
  })
})
