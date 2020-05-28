/* eslint-disable no-undef */
import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
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

describe('uploadFile Snapshot', () => {
  test('Comprobar la UI del componente uploadFile', () => {
    const uploadFile = create(
      <RouterMock>
        <UploadFile />
      </RouterMock>
    )
    expect(uploadFile.toJSON()).toMatchSnapshot()
  })
})
