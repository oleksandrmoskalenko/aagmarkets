import React from 'react'
import './payment.css'


const Payment = () => {
  return (
    <section className="payment" id="payment">
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="col-12 col-md-6">
            <div className="payment__block d-md-flex align-items-md-center">
              <p className="payment__text">
                Trusted by <span className="payment__text payment__text--bold">105,120 customers</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="payment__block d-md-flex align-items-md-center justify-content-md-end">
              <img src={require("./img/payment.png")} alt="payment-services" className="payment__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment