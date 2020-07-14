import React from 'react'
import { Link } from 'react-router-dom'
import './vip-account.css'

const VipAccount = () => {
  return (
    <section className="vip-account" id="vip-account">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="vip-account-block d-flex flex-column justify-content-between text-left">
              <h2 className="vip-account__title">Open a VIP AAG account</h2>
              <p className="vip-account__text d-flex align-self-center align-self-lg-start">Create an account now to make the
              most of the industry’s best prices, priority support and access to exclusive events.</p>
              <div className="vip-account__wrapper">
                <Link to="/registration"><button className="vip-account__button vip-account__button--blue">Open Personal VIP Account</button></Link>
                <Link to="/registration"><button className="vip-account__button">Open Corporate VIP Account</button></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="vip-account-block">
              <div className="vip-account__img d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VipAccount