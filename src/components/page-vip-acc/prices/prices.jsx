import React from 'react'
import { Link } from 'react-router-dom'
import './prices.css'


const Prices = () => {
  return (
    <section className="prices">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 text-center text-xl-left">
            <div className="prices-block">
              <h2 className="prices__title">Our best prices</h2>
              <p className="prices__text text-xl-justify">
                Take advantage of the best prices the market has to offer and trade on our tightest spreads and lowest
                commissions.
                </p>
              <Link to="/products" className="p-0"><button className="prices__button">See our Pricing</button></Link>
            </div>
          </div>
          <div className="col-12 col-xl-8 text-center">
            <img className="prices__img" src={require("./img/prices.png")} alt="laptop" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices