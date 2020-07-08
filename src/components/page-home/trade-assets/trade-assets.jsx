import React from 'react'
import '../../../css/reset.css'
import './trade-assets.css'


const TradeAssets = () => {
  return (
    <section className="trade-assets" id="trade-assets">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="trade-assets-block text-lg-left">
              <h2 className="trade-assets__title">Trade Forex, Gold, Crypto, Indices, and Commodities</h2>
              <p className="trade-assets__text">Get immediate access to the assets you want to trade.</p>
              <button className="trade-assets__button">Open Free Account</button>
              <p className="trade-assets__text trade-assets__text--grey">It only takes 30 seconds</p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="trade-assets-block trade-assets-block--shadow">
              <table className="trade-assets__table">
                <tr>
                  <th className="trade-assets__item-title">Instrument</th>
                  <th className="trade-assets__item-title">Leverage</th>
                </tr>
                <tr>
                  <td className="trade-assets__item">GOLD</td>
                  <td className="trade-assets__item">888X</td>
                </tr>
                <tr>
                  <td className="trade-assets__item trade-assets__item--grey">Bitcoin</td>
                  <td className="trade-assets__item trade-assets__item--grey">10X</td>
                </tr>
                <tr>
                  <td className="trade-assets__item">EUR/USD</td>
                  <td className="trade-assets__item">888X</td>
                </tr>
                <tr>
                  <td className="trade-assets__item trade-assets__item--grey">HSI</td>
                  <td className="trade-assets__item trade-assets__item--grey">888X</td>
                </tr>
                <tr>
                  <td className="trade-assets__item">CRUDE OIL</td>
                  <td className="trade-assets__item">200X</td>
                </tr>
              </table>
              <a href="#" className="trade-assets__link justify-content-center d-flex align-items-center">
                <p className="trade-assets__text trade-assets__text--blue">See all assets</p>
                <svg className="trade-assets__symbol" width="24" height="24" stroke="#52AFEE" stroke-width="1.1"
                  viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.77249 5.19066L8.15377 5.80935C8.00734 5.95579 8.00734 6.19322 8.15377 6.33969L13.8006 12L8.15377 17.6603C8.00734 17.8068 8.00734 18.0442 8.15377 18.1907L8.77249 18.8094C8.91893 18.9558 9.15637 18.9558 9.30284 18.8094L15.847 12.2652C15.9935 12.1188 15.9935 11.8813 15.847 11.7348L9.30284 5.19066C9.15637 5.04419 8.91893 5.04419 8.77249 5.19066Z"
                    fill="#52AFEE" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeAssets