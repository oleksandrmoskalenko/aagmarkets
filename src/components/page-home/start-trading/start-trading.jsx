import React from 'react'
import './start-trading.css'
import StartTradingBlock from './start-trading-block'


const StartTrading = ({ startTrading }) => {
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

export default StartTrading