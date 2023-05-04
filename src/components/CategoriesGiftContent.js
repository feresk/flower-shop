

import React from 'react'
import Card from './card.js'
import cardinfo from './cardinfo.js'

export default function CategoriesGiftContent() {
  const cards = cardinfo.map(card => {
    return <Card
            key={card.id}
            {...card}
            />
  })
  return (
    <div>
      <span>
      <h1 className="shop-page-title">G I F T</h1>
      <h1 className="shop-page-title-2">B O U Q U E T S</h1>
      </span>
      <div className="cards">

        {cards}
      </div>
    </div>
  )
}
