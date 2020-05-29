import React from 'react'
import './styles.scss'
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa'
import { TiWarning } from 'react-icons/ti'

export default function Message ({ text, type }) {
  function selectIcon () {
    switch (type) {
      case 'message-warning':
        return <TiWarning className={`${type}__icon`} />
      case 'message-success':
        return <FaCheckCircle className={`${type}__icon`} />
      case 'message-alert':
        return <FaTimesCircle className={`${type}__icon`} />
    }
  }

  return (
    <div className={`${type}`}>
      {selectIcon()}
      <p className={`${type}__text`}>{text}</p>
    </div>
  )
}
