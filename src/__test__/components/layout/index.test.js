/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import Layout from '../../../components/layout/index'

describe('<Layout />', () => {
  test('Render shallow in Layout component', () => {
    const layout = shallow(
      <RouterMock>
        <Layout />
      </RouterMock>
    )
    expect(layout.length).toEqual(1)
  })

  test('Render mount in layout component', () => {
    const layout = mount(
      <RouterMock>
        <Layout />
      </RouterMock>
    )
    expect(layout.length).toEqual(1)
  })
})
