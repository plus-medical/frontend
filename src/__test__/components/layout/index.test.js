/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Layout from '../../../components/layout/index'

describe('<Layout />', () => {
  test('Render component footer', () => {
    const layout = shallow(
      <RouterMock>
        <Layout />
      </RouterMock>
    )
    expect(layout.length).toEqual(1)
  })
})

describe('<Layout />', () => {
  const layout = mount(
    <RouterMock>
      <Layout />
    </RouterMock>
  )

  test('Render component layout', () => {
    expect(layout.length).toEqual(1)
  })
})
