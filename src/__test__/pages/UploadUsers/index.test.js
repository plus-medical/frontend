/* eslint-disable no-undef */
import React from 'react'
import { shallow, mount } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import UploadUsers from '../../../pages/UploadUsers/index'

describe('<UploadUsers />', () => {
  test('Render shallow in UploadUsers component', () => {
    const uploadUsers = shallow(
      <RouterMock>
        <UploadUsers />
      </RouterMock>
    )
    expect(uploadUsers.length).toEqual(1)
  })
  test('Render mount in UploadUsers component', () => {
    const uploadUsers = mount(
      <RouterMock>
        <UploadUsers />
      </RouterMock>
    )
    expect(uploadUsers.length).toEqual(1)
  })
})
