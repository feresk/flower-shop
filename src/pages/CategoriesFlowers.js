
import React from 'react'

import Header from '../components/Header.js'
import CategoriesFlowersContent from '../components/CategoriesFlowersContent.js'
import '../styleCategoriesFlowers.css'
import '../styleHeader.css'

export default function CategoriesFlowers() {
  return (
    <div className="page">
      <Header />
      <CategoriesFlowersContent />
    </div>
  )
}
