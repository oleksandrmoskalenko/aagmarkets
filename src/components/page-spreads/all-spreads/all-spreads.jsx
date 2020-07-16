import React from 'react'
import './all-spreads.css'


const AllSpreads = ({ allSpreads }) => {
  return (
    <section className="all-spreads">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="all-spreads__title">Tight, all-inclusive all spreads</h2>
            <p className="all-spreads__text">We offer three levels of pricing depending on your account tier.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="all-spreads__table w-100 text-center">
              <tbody>
                <tr>
                  <th className="pl-4 all-spreads__item all-spreads__item-title">Instrument</th>
                  <th className="all-spreads__item all-spreads__item-title">Basic</th>
                  <th className="all-spreads__item all-spreads__item-title">Platinum</th>
                  <th className="all-spreads__item all-spreads__item-title">VIP</th>
                </tr>
                {allSpreads.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td className={`pl-4 ${el.clName}`}>{el.c1}</td>
                      <td className={el.clName}>{el.c2}</td>
                      <td className={el.clName}>{el.c3}</td>
                      <td className={el.clName}>{el.c4}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="all-spreads__text all-spreads__text--small text-left">
              *All prices shown on this page are offered to new AAG clients and are subject to minimum ticket fee.
              Existing clients can access pricing information directly in the trading platform.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllSpreads