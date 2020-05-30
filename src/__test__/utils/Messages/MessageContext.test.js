/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import RouterMock from '../../../__mocks__/RoutesMocks'
import MessageContext from '../../../utils/Messages/MessageContext'

describe('<MessageContext />', () => {
  test('Review Snapshot in MessageContext component', () => {
    const messageContext = create(
      <RouterMock>
        <MessageContext />
      </RouterMock>
    )
    expect(messageContext.toJSON()).toMatchSnapshot()
  })
})
