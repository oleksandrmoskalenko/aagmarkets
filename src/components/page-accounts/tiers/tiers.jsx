import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './tiers.css'


const Tiers = () => {
  return (
    <section className="tiers" id="tiers">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4 text-center text-xl-left">
            <div className="tiers-block">
              <h2 className="tiers__title">How to move between tiers</h2>
              <p className="tiers__text text-justify">
                When you open an account, you are placed into a tier based on your initial funding. After your first
                three months trading, you will automatically be moved to the tier that best reflects your volume - with no
                additional funding required. To better understand how this works, speak to one of our specialists.
                </p>
              <Link to="/registration"><button className="tiers__button">Create Account</button></Link>
            </div>
          </div>
          <div className="col-12 col-xl-8 text-center">
            <div className="tiers__img">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tiers