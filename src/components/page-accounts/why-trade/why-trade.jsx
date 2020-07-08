import React from 'react'
import '../../../css/reset.css'
import './why-trade.css'

const WhyTrade = () => {
  return (
    <section className="why-trade" id="why-trade">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="why-trade__title">Why Trade with AAGMarkets?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="why-trade-block">
              <img src={require("./img/global-market.png")} alt="global-market" />
              <h3 className="why-trade__subsubtitle">Global market access</h3>
              <p className="why-trade__text">Trade more than 40,000 instruments across forex, stocks, options,
              ETFs, commodities, futures, bonds and mutual funds.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="why-trade-block">
              <img src={require("./img/powerful-platforms.png")} alt="powerful-platforms" />
              <h3 className="why-trade__subsubtitle">Powerful platforms</h3>
              <p className="why-trade__text">Access both our platforms, the award-winning AAGMarkets and
              professional-grade AAG TraderPRO, from one account.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="why-trade-block">
              <img src={require("./img/industry-leading.png")} alt="industry-leading" />
              <h3 className="why-trade__subsubtitle">Industry-leading prices</h3>
              <p className="why-trade__text">Benefit from market-leading entry prices and get tighter spreads
              and lower commissions when you upgrade your trading tier.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="why-trade-block">
              <img src={require("./img/export-support.png")} alt="export-support" />
              <h3 className="why-trade__subsubtitle">Expert support</h3>
              <p className="why-trade__text">Receive best-in-className digital support as standard and unlock even
              better personal service with our premium trading tiers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTrade