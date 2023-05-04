

import React from 'react'

import Header from '../components/Header.js'
import ShopContent from '../components/ShopContent.js'
import '../styleShop.css'
import '../styleHeader.css'

export default function Shop() {
  return (
    <div className="page">
      <Header />
      <ShopContent />
    </div>
  )
}
