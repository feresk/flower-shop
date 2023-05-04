

import React from 'react'

import Header from '../components/Header.js'
import CategoriesContent from '../components/CategoriesContent.js'
import '../styleCategories.css'
import '../styleHeader.css'

export default function Categories() {
  return (
    <div className="page">
      <Header />
      <CategoriesContent />
    </div>
  )
}
