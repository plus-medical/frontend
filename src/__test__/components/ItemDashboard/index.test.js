/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import ItemDashboard from '../../../components/itemDashboard/index'

describe('ItemDashboard Snapshot', () => {
  test('Comprobar la UI del componente ItemDashboard', () => {
    const photo = create(
      <RouterMock>
        <ItemDashboard />
      </RouterMock>
    )
    expect(photo.toJSON()).toMatchSnapshot()
  })
})
