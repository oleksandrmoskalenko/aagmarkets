import React from 'react'
import './trade-assets.css'
import { Link } from 'react-router-dom'


const TradeAssets = ({ tradeAssets }) => {
  return (
    <section className="trade-assets">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="trade-assets-block text-lg-left">
              <h2 className="trade-assets__title">Trade Forex, Gold, Crypto, Indices, and Commodities</h2>
              <p className="trade-assets__text">Get immediate access to the assets you want to trade.</p>
              <Link to="/homepage" className="p-0"><button className="trade-assets__button">Open Free Account</button></Link>
              <p className="trade-assets__text trade-assets__text--grey">It only takes 30 seconds</p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="trade-assets-block trade-assets-block--shadow">
              <table className="trade-assets__table">
                <tbody className="trade-assets__tbody">
                  <tr>
                    <th className="trade-assets__item-title">Instrument</th>
                    <th className="trade-assets__item-title">Leverage</th>
                  </tr>
                  {tradeAssets.map((el, i) => {
                    return (
                      <tr key={i}>
                        <td className={el.clName}><div className={`trade-assets__icon trade-assets__icon--${el.id}`}></div>{el.instrument}</td>
                        <td className={el.clName}>{el.leverage}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeAssets