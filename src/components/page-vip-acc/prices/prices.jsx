import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../../../css/reset.css'
import './prices.css'


const Prices = () => {
  return (
    <section className="prices" id="prices">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 text-center text-xl-left">
            <div className="prices-block">
              <h2 className="prices__title">Our best prices</h2>
              <p className="prices__text text-justify">
                Take advantage of the best prices the market has to offer and trade on our tightest spreads and lowest
                commissions.
                </p>
              <Nav.Link href="/homepage" className="p-0"><button className="prices__button">See our Pricing</button></Nav.Link>
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