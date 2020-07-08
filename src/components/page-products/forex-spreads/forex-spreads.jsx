import React from 'react'
import '../../../css/reset.css'
import './forex-spreads.css'


const ForexSpreads = () => {
  return (
    <section className="forex-spreads" id="forex-spreads">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="forex-spreads__title">Tight, all-inclusive Forex spreads</h2>
            <p className="forex-spreads__text">We offer three levels of pricing depending on your account tier.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="forex-spreads__table w-100 text-center">
              <tr>
                <th className="pl-4 forex-spreads__item forex-spreads__item-title">Instrument</th>
                <th className="forex-spreads__item forex-spreads__item-title">Basic</th>
                <th className="forex-spreads__item forex-spreads__item-title">Platinum</th>
                <th className="forex-spreads__item forex-spreads__item-title">VIP</th>
              </tr>
              <tr>
                <td className="pl-4 forex-spreads__item">EUR USD</td>
                <td className="forex-spreads__item">0.6</td>
                <td className="forex-spreads__item">0.5</td>
                <td className="forex-spreads__item">0.4</td>
              </tr>
              <tr>
                <td className="pl-4 forex-spreads__item">GBP USD</td>
                <td className="forex-spreads__item">0.7</td>
                <td className="forex-spreads__item">0.6</td>
                <td className="forex-spreads__item">0.4</td>
              </tr>
              <tr>
                <td className="pl-4 forex-spreads__item">EUR JPY</td>
                <td className="forex-spreads__item">0.9</td>
                <td className="forex-spreads__item">0.8</td>
                <td className="forex-spreads__item">0.6</td>
              </tr>
              <tr>
                <td className="pl-4 forex-spreads__item">AUD USD</td>
                <td className="forex-spreads__item">0.4</td>
                <td className="forex-spreads__item">0.3</td>
                <td className="forex-spreads__item">0.3</td>
              </tr>
              <tr>
                <td className="forex-spreads__item"></td>
                <td className="forex-spreads__item">
                  <a href="#" className="forex-spreads__link">
                    <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                    historical
                    spreads</p>
                  </a>
                </td>
                <td className="forex-spreads__item">
                  <a href="#" className="forex-spreads__link">
                    <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                    historical
                    spreads</p>
                  </a>
                </td>
                <td className="forex-spreads__item">
                  <a href="#" className="forex-spreads__link">
                    <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                    historical
                    spreads</p>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="forex-spreads__text forex-spreads__text--small">
              *All prices shown on this page are offered to new AAG clients and are subject to minimum ticket fee.
              Existing clients can access pricing information directly in the trading platform.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForexSpreads