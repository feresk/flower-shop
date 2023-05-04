

import React from 'react'
import Card from './card.js'
import cardinfo from './cardinfo.js'

export default function ShopContent() {
  const cards = cardinfo.map(card => {
    return <Card
            key={card.id}
            {...card}
            />
  })
  return (
    <div>
      <span>
      <h1 className="shop-page-title">L A T E S T </h1>
      <h1 className="shop-page-title-2"> P R O D U C T S </h1>
      </span>
      <div className="cards">

        {cards}
      </div>
    </div>
  )
}
