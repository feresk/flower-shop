

import React from 'react'
import Card from './card.js'
import cardinfo from './cardinfo.js'

export default function CategoriesFlowersContent() {
  const cards = cardinfo.map(card => {
    return <Card
            key={card.id}
            {...card}
            />
  })
  return (
    <div>
      <span>
      <h1 className="flower-shop-page-title">F L O W E R S</h1>
      </span>
      <div className="cards">

        {cards}
      </div>
    </div>
  )
}
