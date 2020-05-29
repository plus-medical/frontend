/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Loading from '../../../components/Loading/index'

describe('<Loading />', () => {
  test('Review create in Loading component', () => {
    const loading = create(
      <RouterMock>
        <Loading />
      </RouterMock>
    )
    expect(loading.toJSON()).toMatchSnapshot()
  })
})
