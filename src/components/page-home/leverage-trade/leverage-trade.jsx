import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './leverage-trade.css'


const LeverageTrade = () => {
  return (
    <section className="leverage-trade">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="leverage-trade__title text-center">Trade with 1:888 Leverage</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="leverage-trade-block text-lg-left">
              <p className="leverage-trade__text">With a $10 investment, you can earn up to $8,880. Leverage gets you exposure
              to a much larger position than with a standard exchange, meaning instead of earning 15-20% on a good year,
              you can earn 15-20% on a good week.</p>
              <HashLink smooth to="/products#leverage-about" className="leverage-trade__link d-flex align-items-center justify-content-center justify-content-lg-start p-0">
                <p className="leverage-trade__text leverage-trade__text--blue">Learn More</p>
                <svg className="leverage-trade__symbol" width="24" height="24" stroke="#52AFEE" strokeWidth="1.1"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.77249 5.19066L8.15377 5.80935C8.00734 5.95579 8.00734 6.19322 8.15377 6.33969L13.8006 12L8.15377 17.6603C8.00734 17.8068 8.00734 18.0442 8.15377 18.1907L8.77249 18.8094C8.91893 18.9558 9.15637 18.9558 9.30284 18.8094L15.847 12.2652C15.9935 12.1188 15.9935 11.8813 15.847 11.7348L9.30284 5.19066C9.15637 5.04419 8.91893 5.04419 8.77249 5.19066Z"
                    fill="#52AFEE" />
                </svg>
              </HashLink>
              <p className="leverage-trade__text">If Bitcoin increased from $7,000 to $7,045 your profit would be equal to:
            </p>
              <div className="leverage-trade__wrapper">
                <div className="row">
                  <div className="col-6 text-center">
                    <div className="leverage-trade__percent">+0.64%</div>
                    <div className="leverage-trade__text leverage-trade__text--big">without leverage</div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="leverage-trade__percent">+32%</div>
                    <div className="leverage-trade__text leverage-trade__text--big">with 1:50 leverage</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 text-center">
                    <div className="leverage-trade__percent">+128%</div>
                    <div className="leverage-trade__text leverage-trade__text--big">with 1:200 leverage</div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="leverage-trade__percent">+570%</div>
                    <div className="leverage-trade__text leverage-trade__text--big">with 1:888 leverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="leverage-trade__img"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/registration"><button className="leverage-trade__button ">Get Started</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeverageTrade