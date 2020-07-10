import React, { Component } from 'react'
import '../../../css/reset.css'
import './start-trading.css'

export default class StartTradingBlock extends Component {
  render() {
    const { startTrading } = this.props
    return (
      <div className="row">
        {startTrading.map(el => {
          return (
            <div className="col-4">
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
}