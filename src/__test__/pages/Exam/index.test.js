/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Exam from '../../../pages/Exam/index'

describe('<Exam />', () => {
  test('Render shallow in Exam component', () => {
    const exam = shallow(
      <RouterMock>
        <Exam />
      </RouterMock>
    )
    expect(exam.length).toEqual(1)
  })
  test('Render mount in Exam component', () => {
    const exam = mount(
      <RouterMock>
        <Exam />
      </RouterMock>
    )
    expect(exam.length).toEqual(1)
  })
})
