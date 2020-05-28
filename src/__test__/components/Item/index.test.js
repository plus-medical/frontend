/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Item from '../../../components/Item/index'

describe('Photo Snapshot', () => {
  test('Comprobar la UI del componente Photo', () => {
    const photo = create(
      <RouterMock>
        <Item />
      </RouterMock>
    )
    expect(photo.toJSON()).toMatchSnapshot()
  })
})
