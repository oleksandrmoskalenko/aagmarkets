import React from 'react'
import './fx-trade.css'

const FxTradeBlock = ({ fxTrade }) => {
  return (
    <div className="row fx-trade__box">
      {fxTrade.map(el => {
        return (
          <div className="col-6 col-lg-3" key={el.id}>
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

export default FxTradeBlock 