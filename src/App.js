
import React from 'react'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import CategoriesFlowers from './pages/CategoriesFlowers'
import CategoriesGift from './pages/CategoriesGift'
import CategoriesWed from './pages/CategoriesWed'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories-flowers' element={<CategoriesFlowers />} />
          <Route path='/categories-gift' element={<CategoriesGift />} />
          <Route path='/categories-wed' element={<CategoriesWed />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
