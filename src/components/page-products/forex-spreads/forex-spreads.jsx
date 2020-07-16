import React from 'react'
import { Link } from 'react-router-dom'
import './forex-spreads.css'


const ForexSpreads = ({ forexSpreads }) => {
  return (
    <section className="forex-spreads">
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
              <tbody>
                <tr>
                  <th className="pl-4 forex-spreads__item forex-spreads__item-title">Instrument</th>
                  <th className="forex-spreads__item forex-spreads__item-title">Basic</th>
                  <th className="forex-spreads__item forex-spreads__item-title">Platinum</th>
                  <th className="forex-spreads__item forex-spreads__item-title">VIP</th>
                </tr>
                {forexSpreads.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td className={`pl-4 ${el.clName}`}>{el.c1}</td>
                      <td className={el.clName}>{el.c2}</td>
                      <td className={el.clName}>{el.c3}</td>
                      <td className={el.clName}>{el.c4}</td>
                    </tr>
                  )
                })}
                <tr>
                  <td className="forex-spreads__item"></td>
                  <td className="forex-spreads__item">
                    <Link to="/all-spreads" className="forex-spreads__link p-0">
                      <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                      historical
                    spreads</p>
                    </Link>
                  </td>
                  <td className="forex-spreads__item">
                    <Link to="/all-spreads" className="forex-spreads__link p-0">
                      <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                      historical
                    spreads</p>
                    </Link>
                  </td>
                  <td className="forex-spreads__item">
                    <Link to="/all-spreads" className="forex-spreads__link p-0">
                      <p className="forex-spreads__text forex-spreads__text--small forex-spreads__text--blue">Live and
                      historical
                    spreads</p>
                    </Link>
                  </td>
                </tr>
              </tbody>
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