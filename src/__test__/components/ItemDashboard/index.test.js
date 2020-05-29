/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import ItemDashboard from '../../../components/itemDashboard/index'

describe('<ItemDashboard />', () => {
  test('Review Snapshot in ItemDashboard component', () => {
    const photo = create(
      <RouterMock>
        <ItemDashboard />
      </RouterMock>
    )
    expect(photo.toJSON()).toMatchSnapshot()
  })
})
