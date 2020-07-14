import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './fx-prices.css'

const FxPrices = () => {
  return (
    <section className="fx-prices" id="fx-prices">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="fx-prices-block text-left">
              <h2 className="fx-prices__title">Receive our very best</h2>
              <p className="fx-prices__text">Receive lower prices as you trade more with our Platinum and VIP account tiers.
            </p>
              <Link to="/registration"><button className="fx-prices__button">See all FX prices</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FxPrices