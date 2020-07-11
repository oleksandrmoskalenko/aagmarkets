import React from 'react'
import '../../../css/reset.css'
import './start-trading.css'

const StartTradingBlock = ({ startTrading }) => {
  return (
    <div className="row">
      {startTrading.map(el => {
        return (
          <div className="col-4" key={el.id}>
            <div className="start-trading-block">
              <div className="start-trading__wrapper">
                <div className={`start-trading__icon start-trading__icon--${el.id}`}></div>
              </div>
              <h4 className="start-trading__subsubtitle">{el.title}</h4>
              <p className="start-trading__text">{el.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StartTradingBlock