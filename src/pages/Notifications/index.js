import React from 'react'
import './styles.scss'
import ItemDate from '../../components/ItemDate/index'
import IMG_ALARM from '../../assets/images/alarm.png'

export default function index ({ img }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <ItemDate key={index} img={IMG_ALARM} />
        )
      })}
    </div>
  )
}
