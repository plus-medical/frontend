import React from 'react'

export default function HookMock (props) {
  const hook = props.hook ? props.hook() : undefined
  return <div hook={hook} />
}
