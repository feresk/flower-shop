
import React from "react"
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header class="nav-container">
      <nav className="nav">
        <input type="checkbox" id="nav" className="hidden" />
        <label for="nav" className="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <h3 className="nav-logo-text">PetalParadise</h3>
        <div className="nav-wrapper">
          <ul className="nav-items">
            <li><Link to='/' style={{color: 'white', textDecoration: 'none' }}>HOME</Link></li>
            <li><Link to='/shop' style={{color: 'white', textDecoration: 'none' }}>SHOP</Link></li>
            <li><Link to='/categories' style={{color: 'white', textDecoration: 'none' }}>CATEGORIES</Link></li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="icons">
          <i class="fa-solid fa-bag-shopping"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </nav>
    </header>
  )
}
