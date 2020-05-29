/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import UploadFile from '../../../components/uploadFile/index'

describe('<UploadFile />', () => {
  test('Review shallow in UploadFile component', () => {
    const uploadFile = shallow(
      <RouterMock>
        <UploadFile />
      </RouterMock>
    )
    expect(uploadFile.length).toEqual(1)
  })
  test('Review mount in UploadFile component', () => {
    const uploadFile = mount(
      <RouterMock>
        <UploadFile />
      </RouterMock>
    )
    expect(uploadFile.length).toEqual(1)
  })
  test('Review snapshot in UploadFile component', () => {
    const uploadFile = create(
      <RouterMock>
        <UploadFile />
      </RouterMock>
    )
    expect(uploadFile.toJSON()).toMatchSnapshot()
  })
})
