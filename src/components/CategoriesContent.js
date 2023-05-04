

import { Link } from 'react-router-dom'

export default function CategoriesContent() {
  return (
    <div className="categories">
      <div className="categ">
        <img className="flowers-categ-logo" src={require('./images/flowers-logo-2.png')} />
        <h1>
          <Link to='/categories-flowers' style={{color: 'white', textDecoration: 'none', fontFamily:"kiedga" }}>F</Link>
        </h1>
        <h2 className="categ-name" id="flowers">flowers</h2>
      </div>

      <div className="categ">
        <img className="gift-categ-logo" src={require('./images/gift-logo.png')} />
        <h1>
          <Link to='/categories-gift' style={{color: 'white', textDecoration: 'none', fontFamily:"kiedga" }}>G</Link>
        </h1>
        <h2 className="categ-name" id="gift">gift</h2>
      </div>
      <div className="categ">
        <img className="wed-categ-logo" src={require('./images/wed-logo.png')} />
        <h1>
          <Link to='/categories-wed' style={{color: 'white', textDecoration: 'none', fontFamily:"kiedga" }}>W</Link>
        </h1>
        <h2 className="categ-name" id="wed">wedding</h2>
      </div>
    </div>
  )
}
