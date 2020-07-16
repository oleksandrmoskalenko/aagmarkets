import React from 'react'
import { Link } from 'react-router-dom'
import './software.css'


const Software = ({ software }) => {
  return (
    <section className="software">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="software__title">Intuitive Multi-Platform Trading Software</h2>
            <p className="software__text">Be one step ahead and perfect your trading strategies with our industry-leading
            platform.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="software__img">
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 software__wrapper d-md-flex">
            {software.map((el, i) => {
              return (
                <div className="col-12 col-md-4" key={i}>
                  <div className="software-block">
                    <p className="software__numbers">{el.numbers}</p>
                    <span className="software__text software__text--big">{el.text}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="col-12 col-md-4 pt-4 pt-md-0">
            <div className="software-block">
              <p className="software__numbers">&#36; 375,000,000</p>
              <span className="software__text">Average trading volume per day</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to="/registration"><button className="software__button">Get Started</button></Link>
            <span className="software__text software__text--light">Open an account in 30 second</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Software