import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './sign-in.css'

const SignIn = () => {
  return (
    <section className="sign-in" id="sign-in">
      <div className="h-100 container">
        <div className="h-100 row d-flex justify-content-center">
          <div className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 sign-in__wrapper d-flex justify-content-center">
              <Form className="sign-in-form d-flex flex-column justify-content-around">
                <h2 className="sign-in__title">Sign In</h2>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="font-weight-bold d-flex">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="font-weight-bold d-flex">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to="/homepage"><Button className="w-100 sign-in__button" type="submit">
                  Submit
                </Button>
                </Link>
                <p className="sign-in__text text-right">
                  Forgot <Link to="/forgot-password">password?</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn