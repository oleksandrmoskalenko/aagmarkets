import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './header-vip-acc.css'


const HeaderVipAcc = () => {
  return (
    <header className="header-vip-acc" id="header-vip-acc">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-vip-acc-block">
              <h2 className="header-vip-acc__title">Join a prestigious network of traders and investors</h2>
              <h3 className="header-vip-acc__subtitle">Become a VIP and receive our very best prices, priority support and
              exclusive event invitations.</h3>
              <p className="header-vip-acc__text">Minimum funding USD 1,000,000</p>
              <div className="header-vip-acc__wrapper d-flex">
                <Link to="/registration"><button className="header-vip-acc__button">Open Personal VIP Account</button></Link>
                <Link to="/registration"><button className="header-vip-acc__button header-vip-acc__button--black">Open Corporate VIP Account</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderVipAcc