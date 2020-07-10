import React, { Component } from 'react'
import '../../../css/reset.css'
import './start-trading.css'
import StartTradingBlock from './start-trading-block'


export default class StartTrading extends Component {
  render() {
    const { startTrading } = this.props

    return (
      <section className="start-trading" id="start-trading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="start-trading__title">Start Trading in Only 3 Steps</h2>
            </div>
          </div>
          <StartTradingBlock startTrading={startTrading} />
        </div >
      </section >
    )
  }
}