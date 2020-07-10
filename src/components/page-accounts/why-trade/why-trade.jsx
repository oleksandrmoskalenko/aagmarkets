import React, { Component } from 'react'
import '../../../css/reset.css'
import './why-trade.css'
import WhyTradeBlock from './why-trade-block'

export default class WhyTrade extends Component {
  render() {
    const { whyTrade } = this.props

    return (
      <section className="why-trade" id="why-trade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="why-trade__title">Why Trade with AAGMarkets?</h2>
            </div>
          </div>
          <WhyTradeBlock whyTrade={whyTrade} />
        </div>
      </section>
    )
  }
}
