import React from 'react'
import '../../../css/reset.css'
import './fx-prices.css'

const FxPrices = () => {
  return (
    <section className="fx-prices" id="fx-prices">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="fx-prices-block">
              <h2 className="fx-prices__title">Receive our very best</h2>
              <p className="fx-prices__text">Receive lower prices as you trade more with our Platinum and VIP account tiers.
            </p>
              <button className="fx-prices__button">See all FX prices</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FxPrices