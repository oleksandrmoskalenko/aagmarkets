import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import '../../../css/reset.css'
import './halal-investing.css'

const HalalInvesting = () => {
  return (
    <section className="halal-investing" id="halal-investing">
      <div className="container">
        <div className="row d-lg-flex flex-column-reverse flex-lg-row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="halal-investing-block">
              <div className="halal-investing__img"></div>
            </div>
          </div>
          <div className="col-12 offset-lg-1 col-lg-6 d-flex flex-column">
            <h2 className="halal-investing__title text-lg-left">Halal Investing.
            Shariah Compliant</h2>
            <p className="halal-investing__text text-lg-left">We ensure that all your trades are in compliance with
            IslamicEthics.</p>
            <div className="halal-invesing__wrapper d-flex flex-column align-self-center align-self-lg-start">
              <Link to="/registration"><button className="halal-investing__button">View Certificate</button></Link>
              <Nav.Link href="/homepage" className="halal-investing__link p-0">
                <p className="halal-investing__text halal-investing__text--blue text-lg-left">Learn More</p>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HalalInvesting