import React, { Component } from 'react'
import '../../../css/reset.css'
import './fx-trade.css'
import FxTradeBlock from './fx-trade-block'

export default class FxTrade extends Component {
  render() {
    const { fxTrade } = this.props

    return (
      <section className="fx-trade" id="fx-trade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fx-trade__title">Why trade FX with AAGMarkets</h2>
            </div>
          </div>
          <FxTradeBlock fxTrade={fxTrade} />
        </div>
      </section>
    )
  }
}