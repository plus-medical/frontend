/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import CircleButton from '../../../components/buttons/index'

describe('<CircleButton />', () => {
  const circleButton = mount(<CircleButton />)

  test('Render mount in CircleButton component', () => {
    expect(circleButton.length).toEqual(1)
  })
})
