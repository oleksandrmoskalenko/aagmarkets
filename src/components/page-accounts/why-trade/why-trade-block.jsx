import React from 'react'
import './why-trade.css'

const WhyTradeBlock = ({ whyTrade }) => {
  return (
    <div className="row">
      {whyTrade.map(el => {
        return (
          <div className="col-6 col-lg-3" key={el.id}>
            <div className="why-trade-block">
              <div className={`why-trade__img why-trade__img--${el.id}`}></div>
              <h3 className="why-trade__subsubtitle">{el.title}</h3>
              <p className="why-trade__text">{el.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WhyTradeBlock