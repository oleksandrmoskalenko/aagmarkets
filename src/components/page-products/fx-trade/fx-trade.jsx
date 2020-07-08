import React from 'react'
import '../../../css/reset.css'
import './fx-trade.css'

const FxTrade = () => {
  return (
    <section className="fx-trade" id="fx-trade">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fx-trade__title">Why trade FX with AAGMarkets</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="fx-trade-block">
              <div className="fx-trade__img fx-trade__img--1"></div>
              <div className="fx-trade__wrapper">
                <h4 className="fx-trade__subsubtitle">Ultra-competitive FX spreads</h4>
                <p className="fx-trade__text">Trade major Forex pairs from 0.4 pips. Competitive entry prices and even lower
                rates for active traders.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fx-trade-block">
              <div className="fx-trade__img fx-trade__img--2"></div>
              <div className="fx-trade__wrapper">
                <h4 className="fx-trade__subsubtitle">Best-in-className
                execution</h4>
                <p className="fx-trade__text">Tier-1 liquidity gives higher fill-rates, fewer premature stop-outs and
                significant price improvements.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fx-trade-block">
              <div className="fx-trade__img fx-trade__img--3"></div>
              <div className="fx-trade__wrapper">
                <h4 className="fx-trade__subsubtitle">Award-winning
                platform</h4>
                <p className="fx-trade__text">Benefit from integrated Trade Signals, news feeds and innovative risk-management
                features.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fx-trade-block">
              <div className="fx-trade__img fx-trade__img--4"></div>
              <div className="fx-trade__wrapper">
                <h4 className="fx-trade__subsubtitle">Expert service, trusted for 25 years</h4>
                <p className="fx-trade__text">With 800,000+ satisfied customers, AAGMarkets offers world-className service around
                the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FxTrade