/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Item from '../../../components/Item/index'

describe('<Item />', () => {
  test('Review Snapshot in Item component', () => {
    const photo = create(
      <RouterMock>
        <Item />
      </RouterMock>
    )
    expect(photo.toJSON()).toMatchSnapshot()
  })
})
