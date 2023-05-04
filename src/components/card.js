
import React, {lazy} from 'react'
import ReactDOM from 'react-dom'

export default function  Card(props) {
  return (
      <div className="card">
        <i class="fa-regular fa-heart"></i>
        <img src={props.img} />
        <h3>{props.name}</h3>
        <div className="info-group">
          <h2>{props.price} DT</h2>
        </div>
        <button type="button" className="buy-button">
          Add to cart
          <i class="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
  )
}
