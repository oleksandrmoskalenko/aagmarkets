import React from 'react'
import { Link } from 'react-router-dom'
import './corp-account.css'


const CorpAccount = () => {
  return (
    <section className="corp-account" id="corp-account">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="corp-account-block d-flex flex-column align-items-end">
              <h2 className="corp-account__title">Corporate Account</h2>
              <p className="corp-account__text">Simply fill in our application form, fund securely and <br /> access our entire product range.</p>
              <Link to="/registration"><button className="corp-account__button">Create Corporate Account</button></Link>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default CorpAccount