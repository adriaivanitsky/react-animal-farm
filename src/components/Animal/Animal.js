import React from 'react'
import './Animal.css'

export default function Animal(props) {
  return (
    <div className="animal">
      <p className="name">{props.name}</p>
    </div>
  )
}
