import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../../../css/reset.css'
import './forgot-password.css'

const ForgotPassword = () => {
  return (
    <section className="forgot-password" id="forgot-password">
      <div className="h-100 container">
        <div className="h-100 row d-flex justify-content-center">
          <div className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 forgot-password__wrapper d-flex justify-content-center">
              <Form className="forgot-password-form d-flex flex-column justify-content-around">
                <h2 className="forgot-password__title">Forgot your password?</h2>
                <Form.Group controlId="formBasicEmail">
                  <Form.Text className="forgot-password__small-text text-justify mb-3">
                    Don't worry. Just tell us your email address. In 2 minutes we'll send a new password.
                </Form.Text>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button className="forgot-password__button" type="submit">
                  Send
              </Button>
                <p className="forgot-password__text text-right">
                  Return to <a href="#" className="forgot-password__link">Login</a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword