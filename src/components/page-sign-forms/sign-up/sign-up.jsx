import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../../../css/reset.css'
import './sign-up.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className="sign-up" id="sign-up">
      <div className="h-100 container">
        <div className="h-100 row d-flex justify-content-center">
          <div className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 sign-up__wrapper d-flex justify-content-center">
              <Form className="sign-up-form d-flex flex-column justify-content-around">
                <h2 className="sign-up__title">Sign Up</h2>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="font-weight-bold d-flex">First name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Label className="font-weight-bold d-flex">Last name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
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
                <Link to="/homepage"><Button className="w-100 sign-up__button" type="submit">
                  Submit
                </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp