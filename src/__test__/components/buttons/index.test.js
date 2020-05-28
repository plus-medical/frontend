/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import CircleButton from '../../../components/buttons/index'

describe('<CircleButton />', () => {
  test('Render component CircleButton', () => {
    const circleButton = mount(<CircleButton />)
    expect(circleButton.length).toEqual(1)
  })
})
