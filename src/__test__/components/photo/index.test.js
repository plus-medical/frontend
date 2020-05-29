/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Photo from '../../../components/photo/index'

describe('<Photo />', () => {
  test('Review create in Photo component', () => {
    const photo = create(
      <RouterMock>
        <Photo />
      </RouterMock>
    )
    expect(photo.toJSON()).toMatchSnapshot()
  })
})
