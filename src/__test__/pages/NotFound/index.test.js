/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import NotFound from '../../../pages/NotFound/index'

describe('<NotFound />', () => {
  test('Render shallow in NotFound component', () => {
    const notFound = shallow(
      <RouterMock>
        <NotFound />
      </RouterMock>
    )
    expect(notFound.length).toEqual(1)
  })
  test('Render mount in NotFound component', () => {
    const notFound = mount(
      <RouterMock>
        <NotFound />
      </RouterMock>
    )
    expect(notFound.length).toEqual(1)
  })
})
