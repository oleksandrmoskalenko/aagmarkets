import React, { Component } from 'react'
import '../../../css/reset.css'
import './fx-trade.css'

export default class FxTradeBlock extends Component {
  render() {
    const { fxTrade } = this.props

    return (
      <div className="row">
        {fxTrade.map(el => {
          return (
            <div className="col-6 col-lg-3">
              <div className="fx-trade-block text-left">
                <div className={`fx-trade__img fx-trade__img--${el.id}`}></div>
                <div className="fx-trade__wrapper">
                  <h4 className="fx-trade__subsubtitle">{el.title}</h4>
                  <p className="fx-trade__text">{el.text}</p>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    )
  }
}