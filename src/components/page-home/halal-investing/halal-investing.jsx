import React from 'react'
import { Link } from 'react-router-dom'
import './halal-investing.css'

const HalalInvesting = () => {
  return (
    <section className="halal-investing" id="halal-investing">
      <div className="container">
        <div className="row d-md-flex flex-column-reverse flex-md-row justify-content-between">
          <div className="col-12 col-md-5">
            <div className="halal-investing-block">
              <div className="halal-investing__img"></div>
            </div>
          </div>
          <div className="col-12 offset-md-1 col-md-6 d-flex flex-column">
            <h2 className="halal-investing__title text-md-left">Halal Investing.
            Shariah Compliant</h2>
            <p className="halal-investing__text text-md-left">We ensure that all your trades are in compliance with
            IslamicEthics.</p>
            <Link to="/registration" className="text-md-left"><button className="halal-investing__button">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HalalInvesting