import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './header-products.css'


const HeaderProducts = () => {
  return (
    <header className="header-products" id="header-products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-products-block">
              <h2 className="header-products__title">Trade forex on an <br /> award-winning platform</h2>
              <h3 className="header-products__subtitle">Access 182 FX pairs across majors, minors and exotics, plus spot
              metals, from only 0.4 pips</h3>
              <div className="header-products__wrapper d-flex">
                <Link to="/registration"><button className="header-products__button">Create Account</button></Link>
                <Link to="/registration"><button className="header-products__button header-products__button--black">Try Free Demo</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderProducts