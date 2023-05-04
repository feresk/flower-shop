

import React from 'react'

import Header from '../components/Header.js'
import HomeContent from '../components/HomeContent.js'
import '../styleHome.css'
import '../styleHeader.css'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <HomeContent />
    </div>
  )
}
