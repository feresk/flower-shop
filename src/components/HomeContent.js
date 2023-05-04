
import Card from './card.js'
import cardinfo from './cardinfo-home.js'

export default function HomeContent() {
  const cards = cardinfo.map(card => {
    return <Card
            key={card.id}
            {...card}
            />
  })
  return (
    <div className="fill">
      <img className="flower-img" src={require('./images/flower-0.png')} />
      <span>
        <h1 className="title-1">FRESH</h1>
        <h1 className="title-2">FLOWRES</h1>
      </span>
      <h2>bring beauty to your events</h2>
      <div className='description'>
        <ul className="desc-list">
          <li className="gifts">gifts</li>
          <li className="wed">WEDDING</li>
          <li className="sep">/</li>
          <li className="bday">Birthday</li>
          <li className="bouq">bouquets</li>
        </ul>
      </div>
      <img className="flower-img2" src={require('./images/flower-2.png')} />
        <h1  className="home-button">
          SHOP NOW
        </h1>

      <div className="home-card-wrapper">

      <div className="all-icons-desc-wrapper">
        <div className="icon-desc-wrapper">
          <img className="" src={require('./images/order-online.png')} />
          <h1>
             ORDER ONLINE
          </h1>
          <h2 className="icon-desc" >From the comfort of your home</h2>
        </div>

        <div className="icon-desc-wrapper">
          <img className="" src={require('./images/free-shipping.webp')} />
          <h1>
            FREE SHIPPING
          </h1>
          <h2 className="icon-desc" >For all orders from 120 DT</h2>
        </div>
        <div className="icon-desc-wrapper">
          <img className="" src={require('./images/safe-payment.png')} />
          <h1>
            SAFE PAYMENT
          </h1>
          <h2 className="icon-desc" >Protected online payment</h2>
        </div>
      </div>

      <hr className="line"/>
      <h1 className="line-text">OUR NEW ARRIVALS</h1>

        <div className="home-cards">
          {cards}
        </div>
      </div>

      <div className="parag-wrapper">
        <p className='parag' >Welcome to our flower shop! We offer a wide variety of fresh flowers, arrangements,
          and gifts to brighten up any occasion.
        </p>

      </div>
    </div>
  )
}
