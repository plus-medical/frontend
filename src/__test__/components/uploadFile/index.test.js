/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import RouterMock from '../../../__mocks__/RoutesMocks'
import UploadFile from '../../../components/uploadFile/index'

describe('<UploadFile />', () => {
  test('Render component uploadFile', () => {
    const uploadFile = shallow(
      <RouterMock>
        <UploadFile />
      </RouterMock>
    )
    expect(uploadFile.length).toEqual(1)
  })
})

describe('<UploadFile />', () => {
  const uploadFile = mount(
    <RouterMock>
      <UploadFile />
    </RouterMock>
  )
  test('Render component uploadFile', () => {
    expect(uploadFile.length).toEqual(1)
  })
})
