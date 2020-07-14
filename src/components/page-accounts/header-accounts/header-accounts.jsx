import React from 'react'
import { Link } from 'react-router-dom'
import './header-accounts.css'


const HeaderAccounts = () => {
  return (
    <header className="header-accounts" id="header-accounts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-accounts-block text-left">
              <h2 className="header-accounts__title">AAGMarkets Account</h2>
              <h3 className="header-accounts__subtitle">Trade, hedge and invest across 40,000 instrumentsfrom our most popular
              account.</h3>
              <p className="header-accounts__text">Join AAG today and trade all our asset classNamees on industry-leading prices,
              through award-winning platforms and with expert personal service.</p>
              <Link to="/registration"><button className="header-accounts__button">Create Account</button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAccounts