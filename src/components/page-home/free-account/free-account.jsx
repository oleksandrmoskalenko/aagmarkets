import React from 'react'
import { Link } from 'react-router-dom'
import './free-account.css'

const FreeAccount = ({ freeAccount }) => {
  return (
    <section className="free-account">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="free-account__title">Open a Free Account and Trade with 888x Leverage Now</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-lg-4 text-lg-left">
            <div className="free-account-block">
              <ul className="free-account__list">
                {freeAccount.map((el, i) => {
                  return (
                    <li className="free-account__item" key={i}>
                      <div className="free-account__icon"></div>
                      <div className="free-account__text">{el.text}</div>
                    </li>
                  )
                })
                }
              </ul>
              <Link to="/registration"><button className="free-account__button">Open Free Account</button></Link>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="free-account__img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeAccount