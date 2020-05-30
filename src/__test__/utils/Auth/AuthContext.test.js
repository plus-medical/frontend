/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import AuthContext from '../../../utils/Auth/AuthContext'

describe('<AuthContext />', () => {
  test('Review Snapshot in AuthContext component', () => {
    const auth = create(
      <RouterMock>
        <AuthContext />
      </RouterMock>
    )
    expect(auth.toJSON()).toMatchSnapshot()
  })
})
